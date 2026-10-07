const d=`/**
 * 발명 도우미 - 구글시트 연동 스크립트
 * 1. Google Sheets에서 확장 프로그램 > Apps Script 열기
 * 2. 아래 코드 전체를 붙여넣기
 * 3. 배포 > 새 배포 > 유형: 웹앱
 *    - 실행: 나 / 액세스 권한: 모든 사용자
 * 4. 생성된 웹앱 URL을 발명 도우미 '교사용' 설정에 붙여넣기
 */
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = (body.classCode || 'CLASS') + '_' + (body.sheet || 'data');

    if (body.action === 'list') {
      var rows = [];
      var target = ss.getSheetByName(sheetName);
      if (target) {
        var data = target.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
          rows.push({
            ts: String(data[i][0]), type: String(data[i][1]),
            studentId: String(data[i][2]), studentName: String(data[i][3]),
            className: String(data[i][4]), title: String(data[i][5]),
            payload: String(data[i][6])
          });
        }
      }
      return ContentService
        .createTextOutput(JSON.stringify({ ok: true, rows: rows }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(['제출시각', '분류', '학번', '이름', '학급', '제목', '데이터(JSON)']);
    }
    sheet.appendRow([
      new Date(), body.type || '', body.studentId || '', body.studentName || '',
      body.className || '', body.title || '', JSON.stringify(body.payload || {})
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('발명 도우미 연동 준비 완료');
}`;async function u(n,i,c=2e4){const a=new AbortController,s=setTimeout(()=>a.abort(),c);try{const t=await fetch(n,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(i),signal:a.signal,redirect:"follow"});if(!t.ok)return{ok:!1,error:`HTTP ${t.status}`};const e=await t.text();try{return JSON.parse(e)}catch{return{ok:!0}}}catch(t){const e=t instanceof Error?t.message:String(t);return{ok:!1,error:e==="The user aborted a request."?"시간 초과":e}}finally{clearTimeout(s)}}async function S(n,i,c="data",a=3e4){const s=new AbortController,t=setTimeout(()=>s.abort(),a);try{const e=await fetch(n,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"list",classCode:i,sheet:c}),signal:s.signal,redirect:"follow"});if(!e.ok)return{ok:!1,error:`HTTP ${e.status}`};const r=await e.text(),o=JSON.parse(r);return{ok:o.ok,rows:Array.isArray(o.rows)?o.rows:[],error:o.error}}catch(e){const r=e instanceof Error?e.message:String(e);return{ok:!1,error:r==="The user aborted a request."?"시간 초과":r}}finally{clearTimeout(t)}}export{d as G,S as a,u as g};
