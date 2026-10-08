import{_ as m}from"./pdf-libs-XeQ3ByXp.js";async function $(t){const i=document.createElement("div");i.style.position="fixed",i.style.left="-9999px",i.style.top="0",i.style.width="794px",i.appendChild(b(t)),document.body.appendChild(i);try{const[{default:c},{jsPDF:p}]=await Promise.all([m(()=>import("./pdf-libs-XeQ3ByXp.js").then(d=>d.h),[],import.meta.url),m(()=>import("./pdf-libs-XeQ3ByXp.js").then(d=>d.j),[],import.meta.url)]),o=await c(i.firstElementChild,{scale:2,backgroundColor:"#ffffff",useCORS:!0,logging:!1}),a=new p({unit:"mm",format:"a4"}),g=a.internal.pageSize.getWidth(),x=a.internal.pageSize.getHeight(),f=g,u=o.height*f/o.width,w=o.width*x/g;let s=0,h=0;for(;s<o.height;){const d=Math.min(w,o.height-s),n=document.createElement("canvas");n.width=o.width,n.height=d;const l=n.getContext("2d");if(!l)throw new Error("canvas 2d context unavailable");l.fillStyle="#ffffff",l.fillRect(0,0,n.width,n.height),l.drawImage(o,0,s,o.width,d,0,0,o.width,d),h>0&&a.addPage(),a.addImage(n.toDataURL("image/jpeg",.92),"JPEG",0,0,f,d*f/o.width),s+=d,h++}if(u===0)throw new Error("empty document");const y=`${t.studentId}${t.studentName||""}_발명계획서.pdf`;a.save(y)}finally{i.remove()}}function r(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function e(t,i){return`<tr><th>${r(t)}</th><td>${r(i).replace(/\n/g,"<br/>")}</td></tr>`}function b(t){const i=document.createElement("div");return i.innerHTML=`
  <div style="font-family:Pretendard,'Malgun Gothic',sans-serif;color:#111;padding:48px 56px;background:#fff;">
    <div style="text-align:center;border-bottom:3px solid #1f2430;padding-bottom:16px;margin-bottom:24px;">
      <div style="font-size:13px;letter-spacing:4px;color:#666;">중학교 기술·가정 발명 수업</div>
      <div style="font-size:26px;font-weight:800;margin-top:6px;">발 명 계 획 서</div>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
      <tr>
        <th style="border:1px solid #999;background:#f3f4f6;padding:8px;width:16%;">학번</th>
        <td style="border:1px solid #999;padding:8px;width:17%;">${r(t.studentId)}</td>
        <th style="border:1px solid #999;background:#f3f4f6;padding:8px;width:16%;">이름</th>
        <td style="border:1px solid #999;padding:8px;width:17%;">${r(t.studentName)}</td>
        <th style="border:1px solid #999;background:#f3f4f6;padding:8px;width:16%;">학급</th>
        <td style="border:1px solid #999;padding:8px;">${r(t.className)}</td>
      </tr>
    </table>
    <div style="border:2px solid #4F46E5;background:#EEF2FF;padding:12px 16px;font-size:16px;font-weight:700;margin-bottom:20px;">
      발명 제목 : ${r(t.inventionTitle||"(제목을 입력하세요)")}
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      ${e("발명 목적",t.purpose)}
      ${e("누구를 위해 (WHO)",t.who)}
      ${e("어디서 (WHERE)",t.where)}
      ${e("문제 상황",t.problemSituation)}
      ${e("왜 필요한가 (WHY)",t.why)}
      ${e("아이디어 요약",t.ideaSummary)}
      ${e("작동 원리 · 구조",t.mechanismDescription)}
      ${e("재료 및 도구",t.materialsTools)}
      ${e("사용 시나리오",t.usageScenario)}
      ${e("제작 계획 단계",t.planSteps.filter(Boolean).map((c,p)=>`${p+1}. ${c}`).join(`
`))}
      ${e("예상 일정",t.expectedSchedule)}
      ${e("기대 효과",t.expectedEffects)}
      ${e("평가 계획",t.evaluationPlan)}
      ${e("학생 소감",t.studentReflection)}
    </table>
    <div style="margin-top:32px;display:flex;justify-content:space-between;align-items:flex-end;">
      <div style="font-size:11px;color:#888;">작성일: ${new Date(t.updatedAt||t.createdAt).toLocaleDateString("ko-KR")} · 발명 도우미 웹앱</div>
      <div style="width:86px;height:86px;border:3px double #B45309;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#B45309;font-weight:800;font-size:12px;transform:rotate(-8deg);">
        <span style="font-size:22px;">✔</span>
        <span>발명가 인증</span>
      </div>
    </div>
  </div>`,i}export{$ as e,b as r};
