import { type FC, type PropsWithChildren } from "react";
// type ReactNode
// interface CourseGoalProps {
//     title: string;
//    children:ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, id, children, onDelete }) => {
  //   console.log(children);

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
};

export default CourseGoal;
