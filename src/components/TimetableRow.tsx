import React, { FC } from 'react'
import { Col, Row } from 'antd'
import { cellStyle, DateData, rowStyle } from './Timetable'
import SubjectView from './SubjectView'

interface ITimetableRow {
    time: string
    columnsPer: number
    subjects: DateData
}

const TimetableRow: FC<ITimetableRow> = ({subjects, columnsPer, time}) => {

    const dates = Object.keys(subjects)

    const views = []

    for (const [ix, date] of Object.entries(dates)) {
        const s = subjects[date]
        views.push(
            <Col span={columnsPer} key={ix} style={cellStyle}>
                {s ? <SubjectView subjects={s}/> : null}
            </Col>,
        )
    }

    return (
        <Row justify="center" align="middle" style={rowStyle}>
            <Col span={columnsPer} style={cellStyle}>
                {time}
            </Col>
            {views}
        </Row>
    )
}

export default TimetableRow
