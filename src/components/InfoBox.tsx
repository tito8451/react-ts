import { type FC, type PropsWithChildren } from "react";

type HintProps = PropsWithChildren<{
  mode: "hint";
}>;
type WarningProps = PropsWithChildren<{
  mode: "warning";
  severity: " low" | "medium" | "high";
}>;
type InfoBoxProps = HintProps | WarningProps;
const InfoBox: FC<InfoBoxProps> = (props) => {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity} `}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
