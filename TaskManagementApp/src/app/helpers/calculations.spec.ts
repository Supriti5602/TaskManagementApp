import Calculations from "./calculations";

// Please complete the following unit tests for the Calculations class:

describe('Calculations', () =>
{
    it('should calculate the percentage standard deviation of a one-dimensional array', () =>
    {
        // TODO: Implement test
        const numbers = [53, 3, 65, 57, 32, 46, 89, 17, 23];
        const result = Calculations.calculatePercentageStandardDeviationOfOneDimensionalArray(numbers);
        expect(result).toEqual(58.837905637617816);
    });


    it('should calculate the zero crossing percentage of an array', () =>
    {
        // TODO: Implement test
        const numbers = [1, 8, 0, -67, 5, -6, 34, -97, 56];
        const result = Calculations.zeroCrossingPercentage(numbers);
        expect(result).toEqual(66.66666666666666);
    });

    it('should calculate the average of a two-dimensional array', () =>
    {
        // TODO: Implement test
        const numbers = [
            [12, 23, 34, 45],
            [56, 67, 78, 89]
        ];
        const result = Calculations.calculateAverageOfTwoDimensionalArray(numbers);
        expect(result).toEqual(50.5);
    });

    it('should get the most frequent value at each subarray', () =>
    {
        // TODO: Implement test
        const numbers = [
            [12, 23, 34, 45, 32, 54, 23, 54, 23, 12],
            [98, 87, 17, 47, 21, 21, 42, 17, 17, 25]
        ];
        const result = Calculations.getMostFrequentValueAtEachSubarray(numbers);
        expect(result[0]).toEqual(23);
        expect(result[1]).toEqual(17);
    });

    it('should get the average value of each subarray after trimming percentage highest and lowest values', () =>
    {
        // TODO: Implement test
        const numbers = [
            [45, 67, 42, 98, 36, 75, 64],
            [64, 12, 56, 74, 82, 45, 25]
        ];
        const percentage = 23;
        const result = Calculations.getAverageValueOfEachSubarryAfterTrimmingPercentageHighestAndLowestValues(numbers, percentage);
        expect(result[0]).toEqual(54.5);
        expect(result[1]).toEqual(47.5);
    });
});