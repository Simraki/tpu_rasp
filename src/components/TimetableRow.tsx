import React, { FC } from 'react'
import { Col, Row } from 'antd'
import { cellStyle, Data, rowStyle } from './Timetable'
import SubjectView from './SubjectView'

interface ITimetableRow {
    time: string
    columnsPer: number
    subjects: Data[]
}

const TimetableRow: FC<ITimetableRow> = ({subjects, columnsPer, time}) => {

    return (
        <Row justify="center" align="middle" style={rowStyle}>
            <Col span={columnsPer} style={cellStyle}>
                {time}
            </Col>
            {subjects.map((subj, index) => (
                <>
                    <Col span={columnsPer} key={index} style={cellStyle}>
                        {subj ? <SubjectView subject={subj}/> : null}
                    </Col>
                </>
            ))}
        </Row>
    )
}

export default TimetableRow
