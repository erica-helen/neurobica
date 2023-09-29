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
        'Dress with your eyes closed',
        'Eat different types of food',
        'Check the time in a mirror',
        'Switch the computer mouse aside',
        'Brush your teeth using your left hand (or your right, if you are left-handed)',
        'When reading a word, think of five others that start with the same letter',
        'If you are right-handed, try writing with your left hand',
        'Learn a new language',
       ' Take a different route to work or the grocery store.',
        'Listen to music from a foreign language and try to decipher the lyrics.' ,
       ' Close your eyes and identify objects by smell and touch.' ,
       ' Memorize and recite a poem or passage from a book.' ,
        'Draw a picture with your non-dominant hand. ',
       ' Count backward from 100.' ,
       ' Practice mindfulness meditation to improve concentration.' ,
       'Count backward from 100 in increments of 7.' ,
       ' Solve puzzles upside down. ',
       ' Take a shower with your eyes closed. ',
        'Close your eyes and try to identify different sounds around you, such as birds, cars passing by, or musical instruments, just by sound.' ,
        'Try to recall and recount your past day or week in reverse chronological order.' ,
       ' Do 5 multiplications of 3-digit numbers without using the calculator.' ,
       ' Take apart a common household item, like a clock or a remote control, and try to put it back together without looking at instructions.' ,
        'Create a piece of art using both your dominant and non-dominant hand. ',
        'Try solving crosswords or word puzzles with higher difficulty levels than usual.' ,
       ' Try a sport you ve never done before', 
       ' Do aerobic activity at least 5 times a week.',

    ];

    // activities.forEach((activity, indexOf) => {
    //     if(!ACTIVITY.find(item => item.description === activity )){
    //         const activityMapped: Activity = {
    //             id:indexOf+1,
    //             name:  `Activity ${indexOf+1}`,
    //             description:activity, 
    //             enabled:false,
    //             checklist:[{
    //                 id:1,
    //                 name: `Day ${indexOf+1}`,
    //                 enabled:true,
    //             }]
    //         }   
    //         ACTIVITY.push(activityMapped)   
    //     }  
    // })

    for(let i = 0; i < activities.length; i++){
        if(!ACTIVITY.find(item => item.description === activities[i] )){
            const activityMapped: Activity = {
                id:i+1,
                name: `Activity ${i+1}`,
                description: activities[i],
                enabled: false,
                checklist:[{
                    id:1,
                    name: `Day ${i+1}`,
                    enabled:true,
                }]
            }
            ACTIVITY.push(activityMapped)
        }
    }
}

