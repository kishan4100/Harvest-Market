import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">ganesh</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">patrick</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">kitty</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">kamal</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">steve o'hearn</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
