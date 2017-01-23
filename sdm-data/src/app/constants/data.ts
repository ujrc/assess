import { Topics, SubTopics } from './../models/sdm-header';

export const SUB_TOPICS_DATA:SubTopics[]=[
    {id:1,title:'No Prior neglect investigations'},
    {id:2,title:'One Prior abuse investigations'},
    {id:3,title:'Current repeort maltreatment type'},
    {id:4,title:'PCharacteristics of children in the household'},
    {id:5,title:'Primary or secondary caregiver alcohol/or grug use'},
]

export const TOPICS_DATA:Topics[]=[
    {id:1,title:'Prior neglect investigations',subTopics:SUB_TOPICS_DATA},
    {id:2,title:'Prior abuse investigations'},
    {id:3,title:'Current repeort maltreatment type'},
    {id:4,title:'Characteristics of children in the household'},
    {id:5,title:'Primary or secondary caregiver alcohol/or grug use'},
    ]

// export const SUB_TOPICS_DATA=[
//     {id:1,title:'No Prior neglect investigations'},
//     {id:2,title:'One Prior abuse investigations'},
//     {id:3,title:'Current repeort maltreatment type'},
//     {id:4,title:'PCharacteristics of children in the household'},
//     {id:5,title:'Primary or secondary caregiver alcohol/or grug use'},
// ]
