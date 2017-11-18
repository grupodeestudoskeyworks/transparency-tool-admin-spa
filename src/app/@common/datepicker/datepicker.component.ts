import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  setYear,
  eachDay,
  getDate,
  getMonth,
  getYear,
  isToday,
  isSameDay,
  isSameMonth,
  isSameYear,
  format,
  getDay,
  subDays,
  setDay,
} from 'date-fns';
import { ISlimScrollOptions } from 'ngx-slimscroll';

export interface DatepickerOptions {
  minYear?: number; // default: current year - 30
  maxYear?: number; // default: current year + 30
  displayFormat?: string; // default: 'MMM D[,] YYYY'
  barTitleFormat?: string; // default: 'MMMM YYYY'
  firstCalendarDay?: number; // 0 = Sunday (default), 1 = Monday, ..
}

@Component({
  selector: 'datepicker',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatepickerComponent), multi: true },
  ],
})
export class DatepickerComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() options: DatepickerOptions;
  @Input() required: boolean;
  @Input() ngClass;
  @Input() requiredMessage: string;

  isOpened: boolean;
  innerValue: Date;
  controlDate: Date;
  displayValue: string;
  displayFormat: string;
  date: Date;
  barTitle: string;
  barTitleFormat: string;
  minYear: number;
  maxYear: number;
  firstCalendarDay: number;
  view: string;
  years: { year: number; isThisYear: boolean }[];
  dayNames: string[];
  scrollOptions: ISlimScrollOptions;
  days: {
    date: Date;
    day: number;
    month: number;
    year: number;
    inThisMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
  }[];

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  get value(): Date {
    return this.innerValue;
  }

  set value(val: Date) {
    this.innerValue = val;
    this.onChangeCallback(this.innerValue);
  }

  constructor(private elementRef: ElementRef) {
    this.scrollOptions = {
      barBackground: '#DFE3E9',
      gridBackground: '#FFFFFF',
      barBorderRadius: '3',
      gridBorderRadius: '3',
      barWidth: '6',
      gridWidth: '6',
      barMargin: '0',
      gridMargin: '0',
    };
  }

  ngOnInit() {
    this.view = 'days';
    this.date = this.controlDate = new Date();
    this.setOptions();
    this.initDayNames();
    this.initYears();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('options' in changes) {
      this.setOptions();
      this.initDayNames();
      this.init();
      this.initYears();
    }
  }

  setOptions(): void {
    this.minYear = this.options && this.options.minYear || getYear(this.date) - 30;
    this.maxYear = this.options && this.options.maxYear || getYear(this.date) + 30;
    this.displayFormat = this.options && this.options.displayFormat || 'DD/MM/YYYY';
    this.barTitleFormat = this.options && this.options.barTitleFormat || 'MMMM YYYY';
    this.firstCalendarDay = this.options && this.options.firstCalendarDay || 0;
  }

  nextMonth(): void {
    this.controlDate = addMonths(this.controlDate, 1);
    this.init();
  }

  prevMonth(): void {
    this.controlDate = subMonths(this.controlDate, 1);
    this.init();
  }

  setDate(i: number): void {
    this.controlDate = this.date = this.days[i].date;
    this.value = this.date;
    this.init();
    this.close();
  }

  setYear(i: number): void {
    this.controlDate = this.date = setYear(this.date, this.years[i].year);
    this.init();
    this.initYears();
    this.view = 'days';
  }

  init(): void {
    const start = startOfMonth(this.controlDate);
    const end = endOfMonth(this.controlDate);

    this.days = eachDay(start, end).map(date => {
      return {
        date: date,
        day: getDate(date),
        month: getMonth(date),
        year: getYear(date),
        inThisMonth: true,
        isToday: isToday(date),
        isSelected: isSameDay(date, this.innerValue) && isSameMonth(date, this.innerValue) && isSameYear(date, this.innerValue),
      };
    });

    for (let i = 1; i <= getDay(start) - this.firstCalendarDay; i++) {
      const date = subDays(start, i);
      this.days.unshift({
        date: date,
        day: getDate(date),
        month: getMonth(date),
        year: getYear(date),
        inThisMonth: false,
        isToday: isToday(date),
        isSelected: isSameDay(date, this.innerValue) && isSameMonth(date, this.innerValue) && isSameYear(date, this.innerValue),
      });
    }

    this.displayValue = this.innerValue ? format(this.innerValue, this.displayFormat) : '';
    this.barTitle = format(start, this.barTitleFormat);
  }

  initYears(): void {
    const range = this.maxYear - this.minYear;
    this.years = Array.from(new Array(range), (x, i) => i + this.minYear).map(year => {
      return { year: year, isThisYear: year === getYear(this.date) };
    });
  }

  initDayNames(): void {
    this.dayNames = [];
    const start = this.firstCalendarDay;
    for (let i = start; i <= 6 + start; i++) {
      const date = setDay(new Date(), i);
      this.dayNames.push(format(date, 'ddd'));
    }
  }

  toggleView(): void {
    this.view = this.view === 'days' ? 'years' : 'days';
  }

  toggle(): void {
    this.isOpened = !this.isOpened;
  }

  close(): void {
    this.isOpened = false;
  }

  clearDate(dateInput): void {
    this.onChangeCallback(
      this.date = this.innerValue = this.displayValue = null,
    );

    this.controlDate = new Date();
    this.init();
    this.barTitle = format(this.controlDate, this.barTitleFormat);
  }

  writeValue(val: Date) {
    if (val) {
      this.date = this.innerValue = this.controlDate = val;
      this.displayValue = format(this.innerValue, this.displayFormat);
    } else {
      this.date = this.innerValue = this.displayValue = null;
      this.controlDate = new Date();
    }

    this.init();
    this.barTitle = format(startOfMonth(this.controlDate), this.barTitleFormat);
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  @HostListener('document:click', ['$event']) onBlur(e: MouseEvent) {
    if (!this.isOpened) {
      return;
    }

    const input = this.elementRef.nativeElement.querySelector('.ngx-datepicker-input');
    if (e.target === input || input.contains(<any>e.target)) {
      return;
    }

    const container = this.elementRef.nativeElement.querySelector('.ngx-datepicker-calendar-container');
    if (container && container !== e.target && !container.contains(<any>e.target) && !(<any>e.target).classList.contains('year-unit')) {
      this.close();
    }
  }
}
