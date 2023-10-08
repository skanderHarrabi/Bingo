import classNames from "classnames";
import "./Tile.css";

const Tile = ({
  content,
  onToggle,
  selected,
  middleTile,
}: {
  content: string;
  onToggle: () => void;
  selected: boolean;
  middleTile: boolean;
}) => (
  <div
    onClick={onToggle}
    className={classNames("tile", {
      selected: !middleTile && selected,
      middle: middleTile,
    })}
  >
    {content}
  </div>
);

export default Tile;
