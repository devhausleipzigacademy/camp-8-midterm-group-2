import { TicketComponent, TicketProps } from "../components/TicketComponent";

const ticketInfo: TicketProps = {
  title: "",
  date: "",
  time: "",
  price: "",
  seats: [],
};

export function Ticket(): JSX.Element {
  return (
    <div className="bg-dark h-screen  pt-8 px-5">
      <TicketComponent
        title={"Violent Night"}
        date={"08. Jan"}
        time={"14:30"}
        price={"$42.85"}
        seats={["C-3", "C-5", "A-4"]}
      />
      ;
    </div>
  );
}
