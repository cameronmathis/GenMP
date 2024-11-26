export type Person = {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
};

export function generateMPPrompt(
    people: Person[],
    numberOfDays: number
): string {
    return `${buildOverviewSentence(
        people.length,
        numberOfDays
    )} ${buildMacroSentences(
        people
    )} Keep the breakfasts and lunches the same each day but have two unique dinners. Include the macros, recipes, and a grocery list.`;
}

function buildOverviewSentence(
    numberOfPeople: number,
    numberOfDays: number
): string {
    return `Can you make me a meal plan for ${numberOfPeople} people and ${numberOfDays} days.`;
}

function buildMacroSentences(people: Person[]): string {
    var macroSentences = '';
    people.forEach((person, i) => {
        macroSentences += buildMacroSentence(person, i);
    });
    return macroSentences;
}

function buildMacroSentence(person: Person, number: number): string {
    var macroSentence = `Person number ${number} wants to eat`;
    if (person.calories) {
        macroSentence += ` ${person.calories} calories a day`;
    }
    if (person.protein) {
        macroSentence += ` ${person.protein}g of protein a day`;
    }
    if (person.carbs) {
        macroSentence += ` ${person.carbs}g of carbs a day`;
    }
    if (person.fat) {
        macroSentence += ` ${person.fat}g of fat a day`;
    }
    return macroSentence;
}
