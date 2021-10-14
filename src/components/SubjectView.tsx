import React, { FC } from 'react'
import { Subject } from './Timetable'
import { Card } from 'antd'

interface ISubjectView {
    subjects: Subject[]
}

const SubjectView: FC<ISubjectView> = ({subjects}) => {

    return (
        <>
            {subjects.map((subj, index) => (
                <Card size="small" title={subj.title} bordered={false} key={index} style={{background: 'green'}}>
                    <p>{subj.place}</p>
                    <p>{subj.teacher}</p>
                </Card>
            ))}
        </>
    )
}

export default SubjectView
