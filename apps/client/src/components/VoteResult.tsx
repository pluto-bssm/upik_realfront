import { ChartNoAxesColumn } from "lucide-react";

export default function VoteResult(){
    const ques = [
        {
            vtype:'재미질문',
            voteTitle:'학교에서 가장가장 무서운 존재는?',
            voteRes:['까먹고 기숙사 소등 안 한 날 마주친 사감쌤', '깃 충돌','원래 되다가 갑자기 안됨'],
        }
    ];
    return(
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-[8px] w-[770px] h-[596px] p-10 flex flex-col justify-between">
                <div>
                <div className="flex items-center gap-2 text-4xl font-semibold text-black mb-6">
                <ChartNoAxesColumn size={36}/>투표 결과 보기
                </div>
                <div>
                <h4>{ques.vtype}</h4>
                <h3>{ques.voteTitle}</h3>
                </div>
                <div>
                </div>
                </div>
            </div>
        </div>
    );
}