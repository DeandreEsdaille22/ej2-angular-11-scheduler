import { Component } from '@angular/core';
import { WeekService, MonthService, WorkWeekService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { defaultData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [WeekService, MonthService, WorkWeekService],
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"><e-views> <e-view option="Week" startHour="08:00" endHour="15:00"></e-view>
  <e-view option='Day'></e-view><e-view option="Month" [showWeekend]="showWeekend"></e-view></e-views></ejs-schedule>`
})
export class AppComponent {
  title = 'angular11Scheduler-app';
  public selectedDate: Date = new Date(2023, 7, 18);
  public showWeekend: boolean = false;
  public eventSettings: EventSettingsModel = { dataSource: defaultData };
}
