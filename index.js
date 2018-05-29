/*global describe, it
describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})


*/

function happyHolidays() {
  console.log("Happy holidays!")
  return "Happy holidays!"
}

test1 = happyHolidays()

function happyHolidaysTo(name) {
  console.log(`Happy holidays, ${name}!`)
  return `Happy holidays, ${name}!`
}

test2 = happyHolidaysTo('you')

function happyHolidayTo(holiday, name) {
  console.log(`Happy ${holiday}, ${name}!`)
  return `Happy ${holiday}, ${name}!`
}

test3 = happyHolidayTo('Independence Day', 'you')

function holidayCountdown(holiday, days) {
  console.log(`It's ${days} days until ${holiday}!`)
  return `It's ${days} days until ${holiday}!`
}

test4 = holidayCountdown("Mother's Day", 20)

console.log(test1, test2, test3, test4)


