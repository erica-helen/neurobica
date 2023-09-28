export interface Activity extends BaseObject {
    checklist: BaseObject[];
}

export interface BaseObject {
    id: number;
    name: string;
    description?: string;
    enabled: boolean;
}

export const ACTIVITY: Activity[] = [];

export function generateActivitiesDatabase() {
    const activities = [
        { id: 1, name: 'Activity 1', description: 'Dress with your eyes closed', enabled: false },
        { id: 2, name: 'Activity 2', description: 'Eat different types of food', enabled: false },
        { id: 3, name: 'Activity 3', description: 'Check the time in a mirror', enabled: false },
        { id: 4, name: 'Activity 4', description: 'Switch the computer mouse aside ', enabled: false },
        { id: 5, name: 'Activity 5', description: 'Brush your teeth using your left hand (or your right, if you are left-handed)', enabled: false },
        { id: 6, name: 'Activity 6', description: 'When reading a word, think of five others that start with the same letter', enabled: false},
        { id: 7, name: 'Activity 7', description: 'If you are right-handed, try writing with your left hand', enabled: false },
        { id: 8, name: 'Activity 8', description: 'Learn a new language', enabled: false },
    ];

    activities.forEach(activity => {
        const activityWithChecklist: Activity = {
            ...activity,
            checklist: []
        }

        for(let i = 1; i <= 30; i++){
            activityWithChecklist.checklist.push({id: i, name: `Day ${i}`, enabled: true})
        }


        ACTIVITY.push(activityWithChecklist)
    })
}
