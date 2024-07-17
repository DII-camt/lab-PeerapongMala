const hanoi = (n, firstRod, SecondRod, ThirdRod) => {
    if (n === 1) {
        console.log(firstRod + " --> " + SecondRod);
        return;
    }
    hanoi(n - 1, firstRod, ThirdRod, SecondRod);
    console.log(firstRod + " --> " + SecondRod);
    hanoi(n - 1, ThirdRod, SecondRod, firstRod);
};

// เรียกใช้ฟังก์ชัน hanoi โดยส่งค่า n, 'a', 'c', และ 'b'
const n = 3; // เปลี่ยนค่า n ได้ตามต้องการ
hanoi(n, 'a', 'c', 'b');