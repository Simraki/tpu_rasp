import React, { FC } from 'react'
import { Subject } from './Timetable'
import { Card } from 'antd'

interface ISubjectView {
    subject: Subject
}

const SubjectView: FC<ISubjectView> = ({subject}) => {

    return (
        <>
            <Card size="small" title={(subject as Subject).title} bordered={false}>
                <p>{(subject as Subject).place}</p>
                <p>{(subject as Subject).teacher}</p>
            </Card>
        </>
    )
}

export default SubjectView
