const students = [662110182, 662110183, 662110184, 662110185,
    662110186, 662110187, 662110188, 662110189, 662110190, 662110191,
    662110192, 662110193, 662110194, 662110195, 662110196, 662110197,
    662110198, 662110199, 662110200, 662110201, 662110202, 662110203,
    662110204, 662110205, 662110265
];

const GroupRandom = (students, n) => {
    // Shuffle the students array randomly
    const shuffledStudents = shuffle(students);

    // Calculate number of groups
    const numGroups = Math.ceil(students.length / n);

    // Initialize groups
    const groups = new Array(numGroups).fill().map(() => []);

    // Distribute students into groups
    shuffledStudents.forEach((student, index) => {
        const groupIndex = index % numGroups;
        groups[groupIndex].push(student);
    });

    // Print groups
    groups.forEach((group, index) => {
        console.log(`Group ${index + 1}: ${group.join(', ')}`);
    });
};

// Function to shuffle array (Fisher-Yates shuffle algorithm)
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Example usage: Divide students into groups of size n
const n = 5; // กำหนดจำนวนคนในแต่ละกลุ่ม
GroupRandom(students, n);