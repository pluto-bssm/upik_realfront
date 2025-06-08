import Votemenu from "../votemenu/page";

export default function Votepage() {
  const category = "재미질문";
  const title = "학교에서 가장 무서운것은?";
  const date = "2025-05-23";
  const num = 2;

  return (
    <div>
      <div className="bg-[#FAFAFA] w-[120vh] h-[60vh] rounded-[2vh]">
        <div className="relative top-[4vh] left-[5vh]">
          <p className="text-[#0158DE] font-['P_Regular'] text-[2vh]">
            {category}
          </p>
          <div className="absolute top-[3vh]">
            <p className="text-[#FFFFF] font-['P_Regular'] text-[3vh]">
              {title}
            </p>
            <div className="absolute top-[4vh]">
              <p className="text-[#A6A6A6] font-['P_Regular'] text-[1.5vh]">
                {date} 투표마감
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[20vh] left-[5vh] h-[auto]">
        <Votemenu />
      </div>
    </div>
  );
}
