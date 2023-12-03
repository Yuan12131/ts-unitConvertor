"use strict";
// 단위 변환기 클래스 정의
class UnitConverter {
    // 파운드를 킬로그램으로 변환하는 함수
    static poundsToKilograms(pounds) {
        const kilograms = pounds * 0.453592;
        return kilograms;
    }
    // 인치를 센티미터로 변환하는 함수
    static inchesToCentimeters(inches) {
        const centimeters = inches * 2.54;
        return centimeters;
    }
}
// 테스트
const weightInPounds = 10;
const heightInInches = 20;
const weightInKilograms = UnitConverter.poundsToKilograms(weightInPounds);
const heightInCentimeters = UnitConverter.inchesToCentimeters(heightInInches);
console.log(`${weightInPounds} pounds is approximately ${weightInKilograms.toFixed(2)} kilograms.`);
console.log(`${heightInInches} inches is approximately ${heightInCentimeters.toFixed(2)} centimeters.`);
