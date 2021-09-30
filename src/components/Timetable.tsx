import React, { CSSProperties, FC } from 'react'
import { Col, Row } from 'antd'
import TimetableRow from './TimetableRow'



export type Subject = {
    title: string
    place: string
    teacher: string
}
export type Data = Subject | null
type DataRow = Data[]

// interface Subject1 {
//     time: string
//     title: string
//     place: string
//     teacher: string
// }
//
// interface Data1 {
//     date: string
//     subjects: Subject1[]
// }
//
// const datas: Data1[] = [
//     {
//         date: '01.10.2021',
//         subjects: [
//             {
//                 time: '8:30-10:05',
//                 title: '1.0',
//                 place: 'К. 1.0',
//                 teacher: 'Уч. 1.0',
//             },
//             {
//                 time: '8:30-10:05',
//                 title: '1.0',
//                 place: 'К. 1.0',
//                 teacher: 'Уч. 1.0',
//             },
//             {
//                 time: '10:25-12:00',
//                 title: '1.1',
//                 place: 'К. 1.1',
//                 teacher: 'Уч. 1.1',
//             },
//             {
//                 time: '12:40-14:15',
//                 title: '1.2',
//                 place: 'К. 1.2',
//                 teacher: 'Уч. 1.2',
//             },
//         ],
//     },
//     {
//         date: '02.10.2021',
//         subjects: [
//             {
//                 time: '8:30-10:05',
//                 title: '2.0',
//                 place: 'К. 2.0',
//                 teacher: 'Уч. 2.0',
//             },
//             {
//                 time: '12:40-14:15',
//                 title: '2.2',
//                 place: 'К. 2.2',
//                 teacher: 'Уч. 2.2',
//             },
//         ],
//     },
//     {
//         date: '03.10.2021',
//         subjects: [
//             {
//                 time: '8:30-10:05',
//                 title: '2.0.1',
//                 place: 'К. 2.0.1',
//                 teacher: 'Уч. 2.0.1',
//             },
//             {
//                 time: '10:25-12:00',
//                 title: '3.1',
//                 place: 'К. 3.1',
//                 teacher: 'Уч. 3.1',
//             },
//             {
//                 time: '12:40-14:15',
//                 title: '3.2',
//                 place: 'К. 3.2',
//                 teacher: 'Уч. 3.2',
//             },
//         ],
//     },
// ]
//
//
// type DateData = Record<string, Subject[]>
//
// type TimeToDateData = Record<string, DateData>

const data: Record<string, DataRow> = {
    '8:30-10:05': [
        {
            title: '1.0',
            place: 'К. 1.0',
            teacher: 'Уч. 1.0',
        },
        {
            title: '2.0',
            place: 'К. 2.0',
            teacher: 'Уч. 2.0',
        },
        {
            title: '3.0',
            place: 'К. 3.0',
            teacher: 'Уч. 3.0',
        },
    ],
    '10:25-12:00': [
        {
            title: '1.1',
            place: 'К. 1.1',
            teacher: 'Уч. 1.1',
        },
        null,
        {
            title: '3.1',
            place: 'К. 3.1',
            teacher: 'Уч. 3.1',
        },
    ],
    '12:40-14:15': [
        {
            title: '1.2',
            place: 'К. 1.2',
            teacher: 'Уч. 1.2',
        },
        {
            title: '2.2',
            place: 'К. 2.2',
            teacher: 'Уч. 2.2',
        },
        {
            title: '3.2',
            place: 'К. 3.2',
            teacher: 'Уч. 3.2',
        },
    ],
}

const days = ['Понедельник', 'Вторник', 'Среда']

export const rowStyle: CSSProperties = {
    alignItems: 'stretch',
}
export const cellStyle: CSSProperties = {
    border: '0.5px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}


const Timetable: FC = () => {

    const times: string[] = Object.keys(data)

    const columnsPer = 24 / (days.length + 1)

    // function transform(d: ): TimeToDateData {
    //
    //
    //
    //
    //
    //     return
    // }

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <Row justify="center" align="middle" style={rowStyle}>
                    <Col span={columnsPer} style={cellStyle}>
                        Время
                    </Col>
                    {days.map((value, index) => (
                        <Col span={columnsPer} key={index} style={cellStyle}>
                            {value}
                        </Col>
                    ))}
                </Row>
                {times.map((time) => (
                    <TimetableRow time={time} columnsPer={columnsPer} subjects={data[time]} key={time}/>
                ))}
            </div>
        </>
    )
}

export default Timetable
