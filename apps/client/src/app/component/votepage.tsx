export default function Votepage() {

    const category="재미"
    const title = "학교에서 가장 무서운것은?"
    const date="2025-05-23"
    const IsEnd = false

    return (
      <div>
        <div className="bg-[#FFFFFF] w-[120vh] h-[60vh] rounded-[2vh]">
            <div>
                {category}
                <div>
                    {title}
                    <div>
                        <p>{date}   투표마감</p>
                    </div>
                </div>
            </div>
        </div>
  
      </div>
    );
  }
  