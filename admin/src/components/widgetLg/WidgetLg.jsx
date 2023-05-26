import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">kishan</span>
          </td>
          <td className="widgetLgDate">2 Feb 2023</td>
          <td className="widgetLgAmount">₹422.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">prasanth</span>
          </td>
          <td className="widgetLgDate">2 Feb 2023</td>
          <td className="widgetLgAmount">₹552.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">shrinivas</span>
          </td>
          <td className="widgetLgDate">2 Feb 2023</td>
          <td className="widgetLgAmount">₹300.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.istockphoto.com/id/519078727/photo/male-silhouette-as-avatar-profile-picture.jpg?s=612x612&w=is&k=20&c=LbrCDYxdJk7_7dk_A7H3ebDV5yATfymSP7x2iMlTj9M="
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">ashwij</span>
          </td>
          <td className="widgetLgDate">2 Feb 2023</td>
          <td className="widgetLgAmount">₹450.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
