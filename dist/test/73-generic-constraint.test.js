var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe("generic Constraint", () => {
    // ini generic yang tipe data nya, hanya bisa menggunakan data dari interface Employee dan turunan nya (sudah akan terscope kan)
    // sudah tidak bisa nembak langsung seperti contoh2 sebelum nya
    class EmployeeData {
        constructor(employee) {
            this.employee = employee;
        }
    }
    it("should support constraint", () => __awaiter(void 0, void 0, void 0, function* () {
        const data1 = new EmployeeData({
            id: 1,
            name: "Rofi",
        });
        console.info(data1);
        const data2 = new EmployeeData({
            id: 2,
            name: "Eko",
            totalEmployee: 100,
        });
        console.info(data2);
        const data3 = new EmployeeData({
            id: 2,
            name: "Eko",
            totalEmployee: 100,
            totalManager: 10,
        });
        console.info(data3);
        // const data4 = new EmployeeData<string>("Eko"); // ini akan error karena nembak langsung tidak termasuk didalam employee dan turunan nya
    }));
});
export {};
