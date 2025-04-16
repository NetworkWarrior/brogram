import React from 'react'
import Modal from './Modal'

export default function WorkoutCard(props) {
    const { trainingPlan, workoutIndex, type, dayNum, icon } = props
    const { warmup, workout } = trainingPlan || {}
    const showExerciseDescription = { name: 'asdfaf', description: 'asdssds' }

    return (
        <div className="workout-container">
            {/* <Modal showExerciseDescription={showExerciseDescription} handleCloseModal={() => {}} /> */}

            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type} Workout</b></h2>
                </div>
            </div>

            {/* Warmup Section */}
            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>
                <p className="exercise-info">Sets</p>
                <p className="exercise-info">Reps</p>
                <p className="weight-input">Max Weight</p>

                {warmup.map((warmupExercise, warmupIndex) => (
                    <React.Fragment key={warmupIndex}>
                        <div className="exercise-name">
                            <p>{warmupIndex + 1}. {warmupExercise.name}</p>
                            <button className="help-icon">
                                <i className="fa-regular fa-circle-question"></i>
                            </button>
                        </div>
                        <p className="exercise-info">{warmupExercise.sets}</p>
                        <p className="exercise-info">{warmupExercise.reps}</p>
                        <div className="weight-input">
                            <input placeholder="N/A" disabled />
                        </div>
                    </React.Fragment>
                ))}
            </div>

            {/* Workout Section */}
            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Workout</h4>
                </div>
                <p className="exercise-info">Sets</p>
                <p className="exercise-info">Reps</p>
                <p className="weight-input">Max Weight</p>

                {workout.map((workoutExercise, workoutIndex) => (
                    <React.Fragment key={workoutIndex}>
                        <div className="exercise-name">
                            <p>{workoutIndex + 1}. {workoutExercise.name}</p>
                            <button className="help-icon">
                                <i className="fa-regular fa-circle-question"></i>
                            </button>
                        </div>
                        <p className="exercise-info">{workoutExercise.sets}</p>
                        <p className="exercise-info">{workoutExercise.reps}</p>
                        <div className="weight-input">
                            <input placeholder="14" />
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <div className="wokrout-buttons">
                <button>Save & Exit</button>
                <button disabled={true}>Complete</button>
            </div>
        </div>
    )
}
