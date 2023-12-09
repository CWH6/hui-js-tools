class DateUtils {

    /**
     * 从 开始日期到 结束日期 顺序生成一组日期数组
     * @param startDateStr 开始日期 '2023-6-01'
     * @param endDateStr 结束日期 '2023-6-03'
     * @returns {string[]} [ '2023-06-01', '2023-06-02', '2023-06-03' ]
     */
    static generateDateRange (startDateStr: string, endDateStr: string): string[] {
        let startDate: Date = new Date(startDateStr);
        let endDate: Date = new Date(endDateStr);
        let dateRange: string[] = [];

        if (startDate > endDate) {
            return dateRange; 
        }
        
        while (startDate <= endDate) {
            let dateString: string = startDate.toISOString().slice(0, 10); 
            dateRange.push(dateString); 
            startDate.setDate(startDate.getDate() + 1); 
        }

        return dateRange;
    }


    /**
     * 从 开始日期到 结束日期 顺序生成一组月份数组
     * @param startMonth 开始月份 '2023-06'
     * @param endMonth 结束月份 '2023-06'
     * @returns string[] ['2023-06', '2023-07']
     */
    static generateMonthRange(startMonth: string, endMonth: string): string[] {
        const startDate = new Date(`${startMonth}-01`);
        const endDate = new Date(`${endMonth}-01`);
        const monthRange: string[] = [];
    
        if (startDate > endDate) {
            return monthRange; 
        }
    
        while (startDate <= endDate) {
            const year = startDate.getFullYear();
            const month = (startDate.getMonth() + 1).toString().padStart(2, '0');
            const monthString = `${year}-${month}`;
            monthRange.push(monthString); 
            startDate.setMonth(startDate.getMonth() + 1);
        }
    
        return monthRange;
    }


    /**
     * 根据给定日期，偏移值，偏移类型 对指定日期进行偏移
     * 如：2023-06-02 偏移-1天得到2023-6-01
     * @param date 日期
     * @param offset 偏移值（可正负）
     * @param type 类型（year-年，month-月，week-周，默认day）
     * @returns string
     */
    static getOffsetDate(date: string, offset: number, type: 'year' | 'month' | 'week' | 'day' = 'day'): string {
        const currentDate = new Date(date);
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        let day = currentDate.getDate();

        switch (type) {
            case 'year':
                year += offset;
                break;
            case 'month':
                month += offset;
                break;
            case 'week':
                day += offset * 7;
                break;
            default:
                day += offset;
                break;
        }
        const offsetDate = new Date(year, month, day + 1); // Subtract 1 day
        const formattedDate = offsetDate.toISOString().split('T')[0];
        return formattedDate;
    }

    /**
     * 根据日期类型，输出月范围或者日期范围标题
     * @param startDate 开始日期
     * @param endDate 结束日期
     * @param dateType 日期类型
     * @returns string
     */
    static formatDateTitle(startDate: string, endDate: string, dateType: 'month' | 'date'): string{
        return dateType === 'month' ? this.formatMonthRange(startDate, endDate) : this.formatDateRange(startDate, endDate);
    }


    /**
     * 输入两个时间 yyyy-MM-dd
     * 输出格式：start_yyyy年start_MM月start_dd日至end_yyyy年end_MM月end_dd日
     * @param startDate 开始日期
     * @param endDate 结束日期
     * @returns {string}
     */
    static formatDateRange(startDate: string, endDate: string): string {
        let start = new Date(startDate);
        let end = new Date(endDate);

        let startYear: number = start.getFullYear();
        let startMonth: number = start.getMonth() + 1;
        let startDay: number = start.getDate();

        let endYear: number = end.getFullYear();
        let endMonth: number = end.getMonth() + 1;
        let endDay: number = end.getDate();

        let formattedStartDate: string = startYear + '年' + startMonth + '月' + startDay + '日';
        let formattedEndDate: string = endYear + '年' + endMonth + '月' + endDay + '日';

        return formattedStartDate + '至' + formattedEndDate;
    }


    /**
     * 输入两个时间 yyyy-MM
     * 输出格式：start_yyyy年start_MM月至end_yyyy年end_MM月
     * @param startMonth 开始日期
     * @param endMonth 结束日期
     * @returns {string}
     */
    static formatMonthRange(startMonth: string, endMonth: string): string {
        const startDate: Date = new Date(startMonth);
        const endDate: Date = new Date(endMonth);

        const startYear: number = startDate.getFullYear();
        const endYear: number = endDate.getFullYear();
        const startMonthStr: string = (startDate.getMonth() + 1).toString().padStart(2, '0');
        const endMonthStr: string = (endDate.getMonth() + 1).toString().padStart(2, '0');

        return `${startYear}年${startMonthStr}月至${endYear}年${endMonthStr}月`;
    }

    /**
     * 输入两个时间 yyyy
     * 输出格式：yyyy年至yyyy年
     * @param startYearStr 开始年份
     * @param endYearStr 结束年份
     * @returns {string}
     */
    static formatYearRange(startYearStr: string, endYearStr: string): string {
        const startDate: Date = new Date(startYearStr);
        const endDate: Date = new Date(endYearStr);
        const startYear: number = startDate.getFullYear();
        const endYear: number = endDate.getFullYear();
        return `${startYear}年至${endYear}年`;
    }

    /**
     * 获取今日日期 yyyy-MM-dd 格式
     */
    static getToday(): string {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const month: string = String(today.getMonth() + 1).padStart(2, '0'); // 使用 padStart 补齐月份的零位
        const day: string = String(today.getDate()).padStart(2, '0'); // 使用 padStart 补齐日期的零位

        const formattedDate: string = `${year}-${month}-${day}`;
        return formattedDate;
    }

    /**
     * 获取当前月份 yyyy-MM 格式
     * @returns {string}
     */
    static getMonth(): string {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const month: string = String(today.getMonth() + 1).padStart(2, '0'); // 使用 padStart 补齐月份的零位
        const formattedDate: string = `${year}-${month}`;
        return formattedDate;
    }

    /**
     * 获取当前年 yyyy 格式
     * @returns {string}
     */
    static getYear(): string {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        return `${year}`;
    }


    /**
     * 获取当前月的偏移 offset 个月份 yyyy-MM 格式
     * @param offset 偏移值（正数-往后偏移，负数-往前偏移）
     * @returns {string}
     */
    static getOffsetMonth(offset: number): string {
        const currentDate: Date = new Date();
        const newDate: Date = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + offset);
        const year: number = newDate.getFullYear();
        const month: string = (newDate.getMonth() + 1).toString().padStart(2, '0');
        return `${year}-${month}`;
    }



    /**
     * 获取今日日期yyyy年MM月dd日 格式
     * @returns {string}
     */
    static getTodayChineseFormat(): string {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const month: string = String(today.getMonth() + 1).padStart(2, '0'); // 使用 padStart 补齐月份的零位
        const day: string = String(today.getDate()).padStart(2, '0'); // 使用 padStart 补齐日期的零位

        const formattedDate: string = `${year}年${month}月${day}日`;
        return formattedDate;
    }



    /**
     * 输入年，月，组成yyyy-MM 格式
     * @param {number} year - 年份
     * @param {number} month - 月份
     * @returns {string}
     */
    static formatYearMonth(year: number, month: number): string {
        // 补0将数字转换为2位字符串
        function addZero(num: number): string {
            return num < 10 ? '0' + num : num.toString();
        }
        // 补0后的月份
        const formattedMonth: string = addZero(month);
        // 返回 yyyy-MM 格式的字符串
        return `${year}-${formattedMonth}`;
    }


    /**
     * 输出当前时间的字符串形式yyyyMMddhhss
     * @returns {string}
     */
    static getCurrentDateTimeString(): string {
        const now: Date = new Date();
        const year: number = now.getFullYear();
        const month: string = String(now.getMonth() + 1).padStart(2, '0');
        const day: string = String(now.getDate()).padStart(2, '0');
        const hours: string = String(now.getHours()).padStart(2, '0');
        const minutes: string = String(now.getMinutes()).padStart(2, '0');
        const seconds: string = String(now.getSeconds()).padStart(2, '0');

        const dateTimeString: string = `${year}${month}${day}${hours}${minutes}${seconds}`;
        return dateTimeString;
    }


    /**
     * 输出当前时间的字符串形式MM-dd
     * @returns {string}
     */
    static getTodayMMdd(): string {
        const now: Date = new Date();
        const month: string = String(now.getMonth() + 1).padStart(2, '0');
        const day: string = String(now.getDate()).padStart(2, '0');
        const dateTimeString: string = `${month}-${day}`;
        return dateTimeString;
    }   


    /**
     * 输除一个时间间隔数组
     * @param date 当前日期 MM-dd
     * @param days 后几天
     * @param interval 每小时间隔
     * @returns {*[]} 如：['06-09 00:00','06-09 12:00','06-10 00:00','06-11 12:00']
     */
    static generateTimeSeries(date: string, days: number, interval: number): string[] {
        const result: string[] = [];
        const startDate: Date = new Date(`2023-${date}T00:00:00`);

        for (let day = 0; day < days; day++) {
            const currentDate: Date = new Date(startDate);
            currentDate.setDate(currentDate.getDate() + day);

            for (let hour = 0; hour < 24; hour += interval) {
                const timeString: string = `${currentDate.getMonth() + 1}-${currentDate.getDate()} ${hour.toString().padStart(2, '0')}:00`;
                result.push(timeString);
            }
        }

        return result;
    }


    /**
     * 生成一日时间间隔数组
     * @param interval 间隔单位（小时）
     * @returns {string[]}
     * 如下间隔1.5小时
     * [
     *   '00:00', '01:30', '03:00',
     *   '04:30', '06:00', '07:30',
     *   '09:00', '10:30', '12:00',
     *   '13:30', '15:00', '16:30',
     *   '18:00', '19:30', '21:00',
     *   '22:30'
     * ]
     */
    static generateTimeArray(interval: number): string[] {
        const result: string[] = [];
        const totalMinutes: number = interval * 60;
        for (let minutes = 0; minutes < 1440; minutes += totalMinutes) {
            const hour: number = Math.floor(minutes / 60);
            const minute: number = minutes % 60;

            const timeString: string = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            result.push(timeString);
        }

        return result;
    }   


    /**
     * 生成一段时间间隔数组
     * @param interval 间隔单位（分钟）
     * @returns {string[]}
     * [
     * '00:00', '00:05', '00:10',
     * '00:15', '00:20', '00:25',
     * '00:30' ......
     * ]
     */
    static generateTimeArrayByMinute(interval: number): string[] {
        const result: string[] = [];
        for (let minutes = 0; minutes < 1440; minutes += interval) {
            const hour: number = Math.floor(minutes / 60);
            const minute: number = minutes % 60;

            const timeString: string = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            result.push(timeString);
        }

        return result;
    }


    /**
     * 日期范围分钟间隔
     * 如[2023-10-01 00:00:00 ~ 2023-10-11 00:45:00 ]
     * @param startDate 开始日期
     * @param endDate 结束日期
     * @param intervalMinutes 间隔分钟数
     * @returns {*[]} 日期时间间隔数组
     */
    static generateTimeIntervalsSecond(startDate: string, endDate: string, intervalMinutes: number): string[] {
        let startDateTime: Date = new Date(`${startDate} 00:00:00`);
        let endDateTime: Date = new Date(`${endDate} 23:59:59`);
        let intervals: string[] = [];

        while (startDateTime.getTime() <= endDateTime.getTime()) {
            intervals.push(startDateTime.toISOString().slice(0, 19).replace("T", " "));
            startDateTime.setMinutes(startDateTime.getMinutes() + intervalMinutes);
        }
        // 输出结束时间
        intervals.push(endDateTime.toISOString().slice(0, 19).replace("T", " "));
        return intervals;
    }

    /**
     * 日期范围分钟间隔
     * 如[2023-10-01 00:00 ~ 2023-10-11 00:45]
     * @param startDate 开始日期
     * @param endDate 结束日期
     * @param intervalMinutes 间隔分钟数
     * @returns {string[]} 日期时间间隔数组
     */
    static generateTimeIntervalsMin(startDate: string, endDate: string, intervalMinutes: number): string[] {
        let intervals: string[] = [];
        let currentDate: Date = new Date(startDate);
        let endDateTime: Date = new Date(`${endDate}T23:59:59`);

        while (currentDate <= endDateTime) {
            let formattedDate: string = currentDate.toISOString().slice(0, 16).replace("T", " ");
            intervals.push(formattedDate);
            currentDate.setMinutes(currentDate.getMinutes() + intervalMinutes);
        }

        return intervals;
    }

    /**
     * 生成一天内的日期时间范围
     * 如[2023-10-01 00:00, 2023-10-01 00:30, 2023-10-01 01:00, ...]
     * @param dateStr - 输入的日期字符串，格式为 "yyyy-MM-dd"
     * @param intervalMinutes - 时间间隔（分钟）
     * @returns {string[]} - 包含日期时间范围的字符串数组
     */
    static generateTimeIntervalsMinOneDay(dateStr: string, intervalMinutes: number): string[] {
        const result: string[] = [];
        for (let minutes = 0; minutes < 1440; minutes += intervalMinutes) {
            const hour: number = Math.floor(minutes / 60);
            const minute: number = minutes % 60;

            const timeString: string = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            result.push(`${dateStr} ${timeString}`);
        }
        return result;
    }

 
    /**
     * 输入一个yyyy-MM格式 获取月份的第一天: yyyy-MM-dd
     * @param dateString - 输入的日期字符串，格式为 "yyyy-MM"
     * @returns {string} - 返回月份的第一天，格式为 "yyyy-MM-dd"
     */
    static getFirstDayOfMonth(dateString: string): string {
        let dateArray: string[] = dateString.split('-');
        let year: number = parseInt(dateArray[0]);
        let month: number = parseInt(dateArray[1]) - 1; // 月份是从0开始的，所以要减1

        let firstDay: Date = new Date(year, month, 1);
        let formattedFirstDay: string = `${firstDay.getFullYear()}-${(firstDay.getMonth() + 1).toString().padStart(2, '0')}-01`;
        return formattedFirstDay;
    }


    /**
     * 输入一个yyyy-MM格式 获取月份的最后一天: yyyy-MM-dd
     * @param dateString - 输入的日期字符串，格式为 "yyyy-MM"
     * @returns {string} - 返回月份的最后一天，格式为 "yyyy-MM-dd"
     */
    static getLastDayOfMonth(dateString: string): string {
        let dateArray: string[] = dateString.split('-');
        let year: number = parseInt(dateArray[0]);
        let month: number = parseInt(dateArray[1]);

        let lastDay: Date = new Date(year, month, 0);
        let formattedLastDay: string = `${lastDay.getFullYear()}-${month.toString().padStart(2, '0')}-${lastDay.getDate().toString().padStart(2, '0')}`;
        return formattedLastDay;
    }


}



export default DateUtils


