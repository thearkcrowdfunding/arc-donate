'use client';

import { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';

export default function DonationProgress() {

    const [currentTarget, setCurrentTarget] = useState(null);
    const [currentProgress, setCurrentProgress] = useState(null);
    const [delta, setDelta] = useState<number | null>(null);
    const [progressInPercentage, setProgressInPercentage] = useState<null | number>(null);
    const [isFailure, setFailure] = useState(false);


    useEffect(() => {
        fetchGoal();
    }, []);

    const fetchGoal = async () => {
        const res = await axios.post("https://services.ingricorp.com/ngo/goals", {
            short_id: 'KOVCHEG_OCTOBER_NOVEMBER_2025'
        });
        if (res.data.ok) {
            const goal = res.data.goal;
            const { current_progress, target_goal } = goal;
            console.log(goal)
            setCurrentProgress(current_progress)
            setCurrentTarget(target_goal);
            const division = current_progress / target_goal
            const de = target_goal - current_progress;
            setDelta(de);
            const percentage = division * 100
            setProgressInPercentage(percentage);

            console.log({ division, de })
        } else {
            setFailure(true);
        }
    }

    if (isFailure) {
        return <></>
    }

    if (currentTarget === null || currentProgress === null || progressInPercentage === null) {
        return <></>
    }

    return (
        <div className='donation-progress-container'>
            <div className='donation-progress-text'>
                <b>До конца ноября нужно собрать всего ${currentTarget} </b><br />это  всего {currentTarget / 20} человек по 20$
            </div>
            <div className='donation-progress-line-container'>
                <div className='donation-progress-line' style={{ width: `${progressInPercentage}%` }}>

                </div>
            </div>
            <div className='donation-progress-subtext'>
                Осталось собрать ${delta} из ${currentTarget}
            </div>
        </div>
    )
}