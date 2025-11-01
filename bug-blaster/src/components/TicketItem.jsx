function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`} />

      <div className="ticket-content">
        <h3 className="ticket-title">{title}</h3>
        <p className="ticket-desc">{description}</p>

        <button
          className="button"
          onClick={() => dispatch({ type: "DELETE_TICKET", payload: { id } })}
        >
          Delete
        </button>
        <button
          className="button"
          onClick={() =>
            dispatch({ type: "SET_EDITING_TICKET", payload: ticket })
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TicketItem;
