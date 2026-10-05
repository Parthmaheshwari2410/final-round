import { items, categories } from "../data.js";

// Fake API
// Returns a Promise

function fakeApi(data, ms, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("API req fail"));
                return;
            }

            resolve(data);
        }, ms);
    });
}

//  loadDashboard

async function loadDashboard() {
    try {
        const [medicineData, categoryData] = await Promise.all([
            fakeApi(items, 500),
            fakeApi(categories, 300)
        ]);

        console.log(
            `${medicineData.length} ${categoryData.length}`
        );
    } catch (error) {
        console.log(`Failed: ${error.message}`);
    }
}
// Successful API cal

loadDashboard();


//  Failure path


async function testFailure() {
    try {
        await Promise.all([
            fakeApi(items, 300),
            fakeApi(categories, 300, true)
        ]);
    } catch (error) {
        console.log(`Failed: ${error.message}`);
    }
}

testFailure();



// A3 — Event Loop Output Prediction
// 1
// 5
// 3
// 4
// 2
