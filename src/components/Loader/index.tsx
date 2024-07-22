import * as S from "./style";

export const Loader = ({ color }: { color?: string }) => (
  <S.LoaderContainer style={{ color: "black" }}>
    <div className="box box0">
      <div></div>
    </div>
    <div className="box box1">
      <div></div>
    </div>
    <div className="box box2">
      <div></div>
    </div>
    <div className="box box3">
      <div></div>
    </div>
    <div className="box box4">
      <div></div>
    </div>
    <div className="box box5">
      <div></div>
    </div>
    <div className="box box6">
      <div></div>
    </div>
    <div className="box box7">
      <div></div>
    </div>
    <div className="ground">
      <div></div>
    </div>
  </S.LoaderContainer>
);
