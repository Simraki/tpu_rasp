import React, { CSSProperties, FC } from 'react'
import { Col, Row } from 'antd'
import TimetableRow from './TimetableRow'


export type Subject = {
    title: string
    place: string
    teacher: string
}

interface Subject1 {
    time: string
    title: string
    place: string
    teacher: string
}

export interface Data1 {
    date: string
    subjects: Subject1[]
}

export interface DateData {
    [date: string]: Subject[] | null
}

interface TimeToDateData {
    [time: string]: DateData
}

const datas: Data1[] = [
    {
        date: '01.10.2021',
        subjects: [
            {
                time: '8:30-10:05',
                title: '1.0',
                place: 'К. 1.0',
                teacher: 'Уч. 1.0',
            },
            {
                time: '8:30-10:05',
                title: '1.0.1',
                place: 'К. 1.0.1',
                teacher: 'Уч. 1.0.1',
            },
            {
                time: '10:25-12:00',
                title: '1.1',
                place: 'К. 1.1',
                teacher: 'Уч. 1.1',
            },
            {
                time: '12:40-14:15',
                title: '1.2',
                place: 'К. 1.2',
                teacher: 'Уч. 1.2',
            },
        ],
    },
    {
        date: '02.10.2021',
        subjects: [
            {
                time: '8:30-10:05',
                title: '2.0',
                place: 'К. 2.0',
                teacher: 'Уч. 2.0',
            },
            {
                time: '12:40-14:15',
                title: '2.2',
                place: 'К. 2.2',
                teacher: 'Уч. 2.2',
            },
        ],
    },
    {
        date: '04.10.2021',
        subjects: [
            {
                time: '8:30-10:05',
                title: '3.0',
                place: 'К. 3.0',
                teacher: 'Уч. 3.0',
            },
            {
                time: '10:25-12:00',
                title: '3.1',
                place: 'К. 3.1',
                teacher: 'Уч. 3.1',
            },
            {
                time: '12:40-14:15',
                title: '3.2',
                place: 'К. 3.2',
                teacher: 'Уч. 3.2',
            },
        ],
    },
]


// type TimeToDateData = Record<string, DateData>


export const rowStyle: CSSProperties = {
    alignItems: 'stretch',
    minHeight: '4em'
}
export const cellStyle: CSSProperties = {
    border: '0.5px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}


const Timetable: FC = () => {

    const times = ['8:30-10:05', '10:25-12:00', '12:40-14:15', '14:35-16:10']
    const dates = ['01.10.2021', '02.10.2021', '03.10.2021', '04.10.2021']

    function transform(d: Data1[]): TimeToDateData {
        const final: TimeToDateData = {}

        for (const time of times) {
            final[time] = {}
        }

        for (const date of dates) {
            for (const time of times) {
                const timeSubj = d.find(v => v.date === date)?.subjects?.find(v => v.time === time)
                if (!timeSubj) {
                    final[time][date] = null
                    continue
                }
                const load: Subject = {
                    title: timeSubj.title,
                    place: timeSubj.place,
                    teacher: timeSubj.teacher,
                }
                if (!final[time][date]?.length) {
                    final[time][date] = [load]
                } else {
                    final[time][date]?.push(load)
                }
            }
        }

        return final
    }

    const columnsPer = Math.floor(24 / (dates.length + 1))

    const t = transform(datas)

    console.log(t)

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <Row justify="center" align="middle" style={rowStyle}>
                    <Col span={columnsPer} style={cellStyle}>
                        Время
                    </Col>
                    {dates.map((value, index) => (
                        <Col span={columnsPer} key={index} style={cellStyle}>
                            {value}
                        </Col>
                    ))}
                </Row>
                {times.map((time) =>
                    <TimetableRow time={time} columnsPer={columnsPer} subjects={t[time]} key={time}/>)
                }
            </div>
        </>
    )
}

export default Timetable
