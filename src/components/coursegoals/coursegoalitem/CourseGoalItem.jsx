import styles from './CourseGoalItem.module.css';

const CourseGoalItem = ({ id, onDelete, children }) => {

    const deleteHandler = () => {
        onDelete(id);
    };

    return (
        <li className={`${styles['goal-item']}`} onClick={deleteHandler}>
            {children}
        </li>
    );
};

export default CourseGoalItem;
