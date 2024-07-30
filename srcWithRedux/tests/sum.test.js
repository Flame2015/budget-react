import sum,{substraction} from "../sum";

test("testing for sum function",()=>{
    expect(sum(10,10)).toBe(20)
});

test("testing substract",()=>{
    expect(substraction(30,20)).toBe(10);
})