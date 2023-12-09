import DateUtils from './index'; 

describe('DateUtils', () => {
    
    // DateUtils.generateDateRange(startDate, endDate);
    test('generateDateRange should return correct date range', () => {
        const startDate = '2023-06-01';
        const endDate = '2023-06-03';
        const expectedDateRange = ['2023-06-01', '2023-06-02', '2023-06-03'];

        const result = DateUtils.generateDateRange(startDate, endDate);
        console.log("【generateDateRange】"+result);
        expect(result).toEqual(expectedDateRange);
    });


    // DateUtils.formatDateRange(startDate, endDate)
    test('generateDateRange should return correct date range', () => {
        const startDate = '2023-06-01';
        const endDate = '2023-06-03';
        const result = DateUtils.formatDateRange(startDate, endDate);
        console.log(result);
        //expect(result).toEqual(expectedDateRange);
    });

});