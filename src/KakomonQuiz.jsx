import { useState } from "react";

const SUBJECTS = [
  {
    key: "souron",
    label: "公害総論",
    questions: [
      {
        id: "r07-souron-01",
        question:
          "環境基本法第1条に規定する目的に関する記述中、ア～カの空欄に挿入すべき語句(a～f)の組合せとして、正しいものはどれか。\n\nこの法律は、環境の保全について、(ア)を定め、並びに国、地方公共団体、事業者及び国民の責務を明らかにするとともに、環境の保全に関する施策の(イ)を定めることにより、環境の保全に関する施策を(ウ)に推進し、もって現在及び将来の国民の(エ)な(オ)に寄与するとともに(カ)に貢献することを目的とする。\n\na:総合的かつ計画的　b:人類の福祉　c:基本理念　d:生活の確保　e:健康で文化的　f:基本となる事項",
        choices: [
          "ア:f イ:c ウ:e エ:a オ:b カ:d",
          "ア:c イ:f ウ:a エ:e オ:d カ:b",
          "ア:c イ:f ウ:a エ:e オ:b カ:d",
          "ア:f イ:c ウ:e エ:a オ:d カ:b",
          "ア:f イ:c ウ:a エ:e オ:b カ:d",
        ],
        answer: 1,
      },
      {
        id: "r07-souron-02",
        question:
          "環境基本法第二章第14条に規定する環境の保全に関する基本的施策に関する記述中、ア～エの空欄に挿入すべき語句(a～f)の組合せとして、正しいものはどれか。\n\nこの章に定める環境の保全に関する(ア)及び実施は、基本理念にのっとり、次に掲げる事項の確保を旨として、各種の施策相互の有機的な連携を図りつつ総合的かつ計画的に行われなければならない。\n一 人の健康が保護され、及び生活環境が保全され、並びに自然環境が適正に保全されるよう、大気、水、土壌その他の環境の(イ)が良好な状態に保持されること。\n二 生態系の(ウ)、野生生物の種の保存その他の生物の(ウ)が図られるとともに、森林、農地、水辺地等における多様な自然環境が地域の自然的社会的条件に応じて体系的に保全されること。\n三 人と自然との(エ)が保たれること。\n\na:施策の策定　b:措置　c:自然的構成要素　d:多様性の確保　e:調和　f:豊かな触れ合い",
        choices: [
          "ア:a イ:d ウ:f エ:e",
          "ア:a イ:c ウ:d エ:f",
          "ア:a イ:b ウ:d エ:e",
          "ア:b イ:c ウ:f エ:d",
          "ア:d イ:c ウ:e エ:f",
        ],
        answer: 1,
      },
      {
        id: "r07-souron-03",
        question:
          "環境基本法第二章第16条に規定する環境基準に関する記述中、下線部分(a～j)の用語の組合せとして、誤りを含むものはどれか。\n\n1　政府は、大気の汚染(a)、水質の汚濁(b)、土壌の汚染及び騒音に係る環境上の条件について、それぞれ、人の健康を保護し、及び生活環境を保全する上で維持されることが望ましい基準(c)を定めるものとする。\n\n2　前項の基準が、二以上の類型を設け、かつ、それぞれの類型を当てはめる地域又は水域を指定すべきものとして定められる場合には、その地域又は水域の指定に関する事務は、次の各号に掲げる地域又は水域の区分に応じ、当該各号に定める者が行うものとする。\n\n　一　二以上の都道府県の区域にわたる地域又は水域であって政令で定めるもの(d)　政府(a)\n\n　二　前号に掲げる地域又は水域以外の地域又は水域　次のイ又はロに掲げる地域又は水域の区分に応じ、当該イ又はロに定める者\n\n　　イ　騒音に係る基準(航空機の騒音に係る基準及び新幹線鉄道の列車の騒音に係る基準を除く。)の類型を当てはめる地域であって市に属するもの(e)　その地域が属する都道府県の知事(f)\n\n　　ロ　イに掲げる地域以外の地域又は水域　その地域又は水域が属する市の長(g)\n\n3　第1項の基準については、常に適切な科学的判断が加えられ(h)、必要な改定がなされなければならない。\n\n4　政府(a)は、この章に定める施策であって公害の防止に関係するものを総合的かつ(i)有効適切に講ずることにより(j)、第1項の基準が確保されるように努めなければならない。",
        choices: ["a, b", "c, d", "e, h", "f, g", "i, j"],
        answer: 3,
      },
      {
        id: "r07-souron-04",
        question:
          "「ベンゼン等による大気の汚染に係る環境基準について」の達成期間に関する記述中、ア～ウの空欄に挿入すべき語句(a～e)の組合せとして、正しいものはどれか。\n\nベンゼン等による大気の汚染に係る環境基準は、(ア)摂取される場合には人の健康を損なうおそれがある物質に係るものであることにかんがみ、(イ)人の健康に係る被害が(ウ)防止されるようにすることを旨として、その維持又は早期達成に努めるものとする。\n\na:長期に　b:継続的に　c:原則として　d:未然に　e:将来にわたって",
        choices: [
          "ア:a イ:e ウ:c",
          "ア:b イ:e ウ:d",
          "ア:b イ:c ウ:a",
          "ア:e イ:d ウ:c",
          "ア:e イ:a ウ:d",
        ],
        answer: 1,
      },
      {
        id: "r07-souron-05",
        question:
          "特定工場における公害防止組織の整備に関する法律に関する記述として、誤っているものはどれか。",
        choices: [
          "特定事業者は、公害防止統括者を選任したときは、その日から30日以内に、その旨を当該特定工場の所在地を管轄する都道府県知事に届け出なければならない。",
          "特定事業者は、公害防止主任管理者を選任したときは、その日から30日以内に、その旨を当該特定工場の所在地を管轄する都道府県知事に届け出なければならない。",
          "特定事業者は、公害防止主任管理者を選任すべき事由が発生した日から30日以内に、公害防止主任管理者を選任しなければならない。",
          "常時使用する従業員の数が20人以下の特定事業者は、公害防止統括者を選任する必要がない。",
          "特定事業者は、公害防止管理者を選任したときは、その日から30日以内に、その旨を当該特定工場の所在地を管轄する都道府県知事に届け出なければならない。",
        ],
        answer: 2,
      },
      {
        id: "r07-souron-06",
        question:
          "次の3つの大気汚染物質について、我が国の一般環境大気測定局における年平均値(ppm)を低い順に並べたとき、正しいものはどれか(環境省:令和4年度大気汚染物質(有害大気汚染物質等を除く)に係る常時監視測定結果による)。",
        choices: [
          "SO2 < NO2 < CO",
          "SO2 < CO < NO2",
          "NO2 < SO2 < CO",
          "NO2 < CO < SO2",
          "CO < SO2 < NO2",
        ],
        answer: 0,
      },
      {
        id: "r07-souron-07",
        question:
          "次の3つの温室効果ガスについて、2022(令和4)年度の我が国の温室効果ガス排出量(CO2換算排出量)を多い順に並べたとき、正しいものはどれか(環境省:令和6年版環境白書・循環型社会白書・生物多様性白書による)。\nSF6:六ふっ化硫黄、NF3:三ふっ化窒素、PFCs:パーフルオロカーボン類",
        choices: [
          "SF6 > NF3 > PFCs",
          "SF6 > PFCs > NF3",
          "PFCs > NF3 > SF6",
          "PFCs > SF6 > NF3",
          "NF3 > PFCs > SF6",
        ],
        answer: 3,
      },
      {
        id: "r07-souron-08",
        question:
          "光化学オキシダントに関する記述として、誤っているものはどれか。",
        choices: [
          "窒素酸化物(NOx)と非メタン炭化水素を含む揮発性有機化合物(VOC)などがかかわる大気中の光化学反応によって、光化学オキシダントが生成する。",
          "パーオキシアセチルナイトレートは、光化学オキシダントの一つである。",
          "オゾンは光化学オキシダントの90%以上を占めている。",
          "光化学オキシダントの測定方法として、紫外線吸収法やエチレンを用いる化学発光法がある。",
          "2022(令和4)年度における光化学オキシダントの環境基準達成率は、一般環境大気測定局で1%、自動車排出ガス測定局で0.5%であった。",
        ],
        answer: 4,
      },
      {
        id: "r07-souron-09",
        question:
          "これまでに実施されてきた自動車に係る移動発生源対策として、誤っているものはどれか。",
        choices: [
          "ディーゼル重量車に対する排出ガス規制強化",
          "軽油中の窒素分の低減",
          "窒素酸化物及び粒子状物質の総量削減",
          "自動車税のグリーン化",
          "交通流の分散・円滑化",
        ],
        answer: 1,
      },
      {
        id: "r07-souron-10",
        question:
          "公共用水域の水質汚濁の現状に関する記述として、誤っているものはどれか(環境省:令和4年度公共用水域水質測定結果による)。",
        choices: [
          "人の健康の保護に関する環境基準(健康項目)は、公共用水域全体では99%以上の地点で達成されていた。",
          "河川、湖沼、海域のうち、健康項目の環境基準達成率が最も低いのは河川であった。",
          "河川、湖沼、海域のうち、BOD又はCODの環境基準達成率が最も低いのは湖沼であった。",
          "全シアンに関しては、環境基準を超過した地点はなかった。",
          "カドミウム、鉛、六価クロム、ひ素、総水銀のうち、環境基準を超過した地点数が最も多かった健康項目は、六価クロムであった。",
        ],
        answer: 4,
      },
      {
        id: "r07-souron-11",
        question:
          "2022(令和4)年度において、地下水の環境基準超過率が最も高い項目と、2番目に高い項目の組合せとして、正しいものはどれか(環境省:令和4年度地下水質測定結果(概況調査)による)。",
        choices: [
          "トリクロロエチレン / 鉛",
          "ひ素 / ふっ素",
          "ふっ素 / 鉛",
          "硝酸性窒素及び亜硝酸性窒素 / ひ素",
          "トリクロロエチレン / 硝酸性窒素及び亜硝酸性窒素",
        ],
        answer: 3,
      },
      {
        id: "r07-souron-12",
        question:
          "騒音及び振動に関する記述中、ア～ウの空欄に挿入すべき語句・数値の組合せとして、正しいものはどれか。\n\n・近年の騒音に係る苦情件数は、典型七公害の総苦情件数の(ア)%を超えている(総務省公害等調整委員会:令和4年度公害苦情調査結果報告書による)。\n・航空機騒音に係る評価は1日ごとの(イ)を算出し、全測定日について、そのパワー平均を算出する。\n・在来鉄道騒音については、「在来鉄道の新設又は大規模改良に際しての騒音対策の指針」が定められ、この指針では騒音の評価量として(ウ)が用いられている。",
        choices: [
          "20 / 時間帯補正等価騒音レベル / 騒音レベルの最大値",
          "30 / 加重等価平均感覚騒音レベル / 騒音レベルの最大値",
          "30 / 時間帯補正等価騒音レベル / 等価騒音レベル",
          "40 / 加重等価平均感覚騒音レベル / 騒音レベルの最大値",
          "50 / 加重等価平均感覚騒音レベル / 等価騒音レベル",
        ],
        answer: 2,
      },
      {
        id: "r07-souron-13",
        question:
          "2021(令和3)年度における産業廃棄物に関する記述として、誤っているものはどれか(環境省:令和6年版環境白書・循環型社会白書・生物多様性白書、及び環境省:産業廃棄物の排出・処理状況等(令和3年度実績)による)。",
        choices: [
          "産業廃棄物の総排出量は約3億7600万トンであり、前年度に比べて約200万トン増加した。",
          "業種別排出量が最も多い業種は、建設業であった。",
          "種類別排出量では、汚泥の排出量が最も多く、全体の40%以上を占めていた。",
          "再生利用率が高い廃棄物には、金属くず、がれき類、動物のふん尿がある。",
          "年度ごとに新たに判明した不法投棄件数は、ここ5年間(2017～2021年度)は200件以下で推移している。",
        ],
        answer: 1,
      },
      {
        id: "r07-souron-14",
        question: "ダイオキシン類に関する記述として、誤っているものはどれか。",
        choices: [
          "ダイオキシン類は廃棄物焼却などの事業活動によって環境中に排出されるが、一部は焚き火、火災、火山活動などによっても排出される。",
          "ダイオキシン類対策特別措置法で定義されているのは、ポリ塩化ジベンゾパラ-ジオキシン(PCDD)、ポリ塩化ジベンゾフラン(PCDF)及びコプラナーポリ塩化ビフェニル(コプラナーPCB)である。",
          "PCDDとPCDFは塩素の数や位置によって異性体があり、PCDDの異性体の種類は、PCDFの異性体の種類より多い。",
          "ダイオキシン類の毒性等価係数(TEF)は、2,3,7,8-TeCDDの毒性を1として表したものである。",
          "2,3,7,8-TeCDDは水に溶けにくく、20℃ではほとんど気化しない。",
        ],
        answer: 2,
      },
      {
        id: "r07-souron-15",
        question:
          "ライフサイクルアセスメント(LCA)とその実施手順に関する記述として、誤っているものはどれか。",
        choices: [
          "LCAとは、製品システムのライフサイクルの全体を通したインプット、アウトプット及び潜在的な環境影響のまとめ、並びに評価のことである。",
          "LCAを実施する目的と範囲の設定が、LCAの第一ステップである。",
          "第二ステップのインベントリ分析で用いられるインプットデータは、生産又は排出される製品・排出物に関するものである。",
          "第三ステップでは、地球温暖化や資源消費などの各カテゴリーへの環境に与える影響を定量的に評価する。",
          "第四ステップでは、設定した目的に照らし、インベントリ分析やライフサイクル影響評価の結果を単独に又は総合して評価、解釈する。",
        ],
        answer: 2,
      },
    ],
  },
  {
    key: "suishitsu",
    label: "水質概論",
    questions: [
      {
        id: "r07-suishitsu-gairon-01",
        question:
          "水質汚濁に係る環境基準における公共用水域の水質の測定方法等に関する記述中、下線を付した箇所のうち、誤っているものはどれか。\n\n測定の実施は、人の健康の保護に関する環境基準の関係項目については、公共用水域の水量の如何を問わずに(1)随時(ただし、渇水期を除く。)(2)、生活環境の保全に関する環境基準の関係項目については、公共用水域が(3)通常の状態(河川にあっては(4)低水量以上の流量がある場合、湖沼にあっては(5)低水位以上の水位にある場合等をいうものとする。)の下にある場合に、それぞれ適宜行なうこととする。",
        choices: [
          "水量の如何を問わずに",
          "随時(ただし、渇水期を除く。)",
          "通常の状態",
          "低水量以上の流量がある場合",
          "低水位以上の水位にある場合",
        ],
        answer: 1,
      },
      {
        id: "r07-suishitsu-gairon-02",
        question:
          "水質汚濁防止法第14条の3に規定する地下水の水質の浄化に係る措置命令等に関する記述中、ア～エの空欄に挿入すべき語句の組合せとして、正しいものはどれか。\n\n都道府県知事は、特定事業場において有害物質に該当する物質を含む水の地下への浸透があったことにより、現に(ア)に係る(イ)が生じ、又は生ずるおそれがあると認めるときは、環境省令で定めるところにより、その(イ)を防止するため必要な限度において、当該特定事業場(相続、合併又は分割によりその地位を承継した者を(ウ)。)に対し、相当の(エ)を定めて、地下水の水質の浄化のための措置をとることを命ずることができる。ただし、その者が、当該浸透があった時において当該特定事業場の設置者であった者と異なる場合は、この限りでない。",
        choices: [
          "ア:人の健康 イ:被害 ウ:除く エ:範囲",
          "ア:生活環境 イ:汚染 ウ:含む エ:範囲",
          "ア:生活環境 イ:汚染 ウ:除く エ:範囲",
          "ア:生活環境 イ:被害 ウ:含む エ:期限",
          "ア:人の健康 イ:被害 ウ:含む エ:期限",
        ],
        answer: 4,
      },
      {
        id: "r07-suishitsu-gairon-03",
        question:
          "水質汚濁防止法施行規則第8条の6に規定する有害物質貯蔵指定施設の地下貯蔵施設に係る構造等に関する記述中、下線を付した箇所のうち、誤っているものはどれか。\n\n有害物質貯蔵指定施設のうち地下に設置されているもの(以下「地下貯蔵施設」という。)は、有害物質を含む水の(1)漏えい等を防止するため、次の各号のいずれかに適合するものであることとする。\n一 次のいずれにも適合すること。\nイ (2)タンク室内に設置されていること、(3)二重殻構造であることその他の有害物質を含む水の漏えい等を防止する措置を講じた構造及び材質であること。\nロ 地下貯蔵施設の外面には、(4)倒壊を防止するための措置が講じられていること。ただし、地下貯蔵施設が設置される条件の下で倒壊するおそれのないものである場合にあっては、この限りでない。\nハ 地下貯蔵施設の内部の有害物質を含む(5)水の量を表示する装置を設置することその他の有害物質を含む水の量を確認できる措置が講じられていること。",
        choices: ["漏えい等", "タンク室内", "二重殻構造", "倒壊", "水の量"],
        answer: 3,
      },
      {
        id: "r07-suishitsu-gairon-04",
        question:
          "特定工場における公害防止組織の整備に関する法律に規定する汚水等排出施設に該当しないものはどれか。",
        choices: [
          "鉄鋼業の用に供するガス冷却洗浄施設",
          "電気めっき施設",
          "酸又はアルカリによる表面処理施設",
          "石炭を燃料とする火力発電施設のうち、廃ガス洗浄施設",
          "空きびん卸売業の用に供する自動式洗びん施設",
        ],
        answer: 4,
      },
      {
        id: "r07-suishitsu-gairon-05",
        question:
          "要監視項目の水質の状況に関する記述として、誤っているものはどれか(環境省:令和4年度公共用水域水質測定結果による)。",
        choices: [
          "モリブデン、アンチモンは河川で指針値を超過した地点があった。",
          "全マンガンは、河川及び湖沼で超過率が高いものの一つである。",
          "海域においてウランの超過率が高いのは、海水中に天然に存在するウランによるものと考えられる。",
          "ペルフルオロオクタンスルホン酸(PFOS)及びペルフルオロオクタン酸(PFOA)の指針値(暫定)は、各々の化学物質について定められたものである。",
          "生活環境項目の水生生物の保全に係る要監視項目(6項目)については、河川、湖沼、海域とも、指針値を超過した検体はなかった。",
        ],
        answer: 3,
      },
      {
        id: "r07-suishitsu-gairon-06",
        question: "水中の溶存酸素に関する記述として、誤っているものはどれか。",
        choices: [
          "純水の飽和溶存酸素濃度は、1気圧、水温20℃で約9 mg/Lである。",
          "純水の飽和溶存酸素濃度は、水温が低いほど高くなる。",
          "水中に酸素が溶け込むルートは、水面を通して大気から溶け込むものと、水中の動物プランクトンから供給されるものが主なものである。",
          "閉鎖性水域の底層水の溶存酸素濃度は有機汚濁の程度の指標となる。",
          "閉鎖性水域の底層において、溶存酸素濃度が極めて低くなると、硫化水素やアンモニアなどの悪臭物質が発生し、また一部の重金属類が溶出しやすくなる。",
        ],
        answer: 2,
      },
      {
        id: "r07-suishitsu-gairon-07",
        question: "湖沼・貯水池の特性に関する記述として、誤っているものはどれか。",
        choices: [
          "水温成層が発達すると、垂直混合が抑えられる。",
          "春から夏にかけて形成される水温躍層より下の深水層では、表層(混合層)より水の密度が高い。",
          "春から夏にかけて形成される水温躍層より下の深水層では、表層(混合層)より水温が低い。",
          "夏季部分循環期では、気温の低下に伴って混合層は薄くなる。",
          "冬季に表面水温が0℃近くまで低下する寒冷地の湖沼・貯水池では、年2回の全層循環が生じることがある。",
        ],
        answer: 3,
      },
      {
        id: "r07-suishitsu-gairon-08",
        question: "有害物質の生体影響に関する記述として、誤っているものはどれか。",
        choices: [
          "メタロチオネインは、カドミウムや水銀によって肝臓で誘導生合成され、これらの金属の毒性を強める。",
          "化学物質の毒性を表現するものとして使用されるLD50(半数致死量)は、急性毒性を中心に評価したものである。",
          "メチル水銀は、血液－脳関門を通過して、脳にも高い蓄積を示す。",
          "遊離シアンは、血液中でシアノヘモグロビンを生成し、ミトコンドリアの電子伝達系を阻害する。",
          "有機りん剤の毒性は、主にアセチルコリンエステラーゼ活性を阻害することに起因する。",
        ],
        answer: 0,
      },
      {
        id: "r07-suishitsu-gairon-09",
        question:
          "次の農薬のうち、化学物質の審査及び製造等の規制に関する法律(化審法)の第1種特定化学物質となっていないものはどれか。",
        choices: ["アルドリン", "ディルドリン", "エンドリン", "クロルデン", "1,2-ジクロロプロパン"],
        answer: 4,
      },
      {
        id: "r07-suishitsu-gairon-10",
        question:
          "次の物質のうち、カドミウムその他の人の健康に係る被害を生ずるおそれがある物質として水質汚濁防止法施行令で定められていないものはどれか。",
        choices: [
          "トリクロロエチレン",
          "PCP(ペンタクロロフェノール)",
          "ジクロロメタン",
          "四塩化炭素",
          "塩化ビニルモノマー",
        ],
        answer: 1,
      },
    ],
  },
  {
    key: "osuishori",
    label: "汚水処理特論",
    questions: [
      {
        id: "r07-osuishori-01",
        question: "汚水等処理計画において考慮すべき記述として、誤っているものはどれか。",
        choices: [
          "汚水処理装置の設置計画に入る前に、工場内で排水の量及び濃度を極力減らすように努力する。",
          "製品の歩留まりを向上させて、排水への汚濁負荷の絶対量を低減できることがある。",
          "水使用の合理化を進めて、製品の単位生産量当たりあるいは出荷額当たりの排水量を小さくする。",
          "向流多段洗浄は個別のバッチ洗浄と比較して、排水量だけでなく汚濁負荷の絶対量を著しく減少させることができる。",
          "排水の量や水質の時間変動が大きいときは、調整槽を設けて平均化し、排水処理を容易にする。",
        ],
        answer: 3,
      },
      {
        id: "r07-osuishori-02",
        question:
          "横流式沈殿池(深さ4m、表面積40m2)に粒子含有排水を流入させ、滞留時間8時間で沈降分離している。粒子の除去率は96%であった。この粒子含有排水に別系統の粒子を含まない排水160m3/日を合流させて均一に混合した後、沈殿処理した。粒子の除去率(%)として最も近いものはどれか。ただし、沈殿池内に流れの乱れや短絡がなく、水の流れは平行であり、かつ粒子は均一な沈降速度を持ち、沈降の過程で沈降速度が変わることがないとする。",
        choices: ["84", "72", "68", "62", "58"],
        answer: 1,
      },
      {
        id: "r07-osuishori-03",
        question:
          "水中における浮上速度が0.12cm/sである油滴を、APIオイルセパレーターを用いて分離したい。水槽の深さが2.0m、槽内の平均水平流速が0.36m/minであるとき、100%の油滴を分離するために必要な最低限の理論的な槽の長さ(m)はいくらか。ただし、流れの乱れや短絡流はなく、乱流係数及び短絡係数はともに1とする。",
        choices: ["6", "8.7", "10", "11.6", "19.3"],
        answer: 2,
      },
      {
        id: "r07-osuishori-04",
        question: "清澄ろ過に関する記述として、誤っているものはどれか。",
        choices: [
          "上水道のろ過機に使われるろ材は、有効径0.5～0.7mm程度の砂が望ましいとされている。",
          "有効径とは、ろ材試料としての砂をふるい分け、全質量の10%が通過するふるい目の大きさに相当する粒子径をいう。",
          "均等係数が大きいほど、ろ材として適した砂である。",
          "ろ材層と下部集水装置との間には、支持砂利層を置く。",
          "一般に、支持砂利層は、上部に細かい砂利を、下部に大径の砂利をそれぞれふるい分けて層状に敷き並べる。",
        ],
        answer: 2,
      },
      {
        id: "r07-osuishori-05",
        question: "活性炭の再生に関する記述として、誤っているものはどれか。",
        choices: [
          "老廃炭を全量新炭と交換するか、あるいは再生して利用するかは、再生コストなどを考慮して判断する。",
          "活性炭の再生方法には、乾式加熱法、湿式酸化法、薬品再生法、電気化学的再生法、生物的再生法などがある。",
          "乾式加熱法は、ロータリーキルンや流動炉などを用いて700～1000℃程度の高温で加熱再生する方法である。",
          "乾式加熱法の長所として、再生による活性炭の消耗がほとんどないこと、温度・ガスの厳密な制御が不要なことなどが挙げられる。",
          "乾式加熱法の短所として、高温操作で炉内材質の消耗が激しいこと、装置が高価なことなどが挙げられる。",
        ],
        answer: 3,
      },
      {
        id: "r07-osuishori-06",
        question: "イオン交換に関する記述として、誤っているものはどれか。",
        choices: [
          "樹脂母体に結合している活性基として、スルホン酸基が導入されている樹脂は強酸性陽イオン交換樹脂である。",
          "樹脂母体に結合している活性基として、第四級アンモニウム基が導入されている樹脂は強塩基性陰イオン交換樹脂である。",
          "イオン濃度が2000mg/Lを超えるような高い場合には、処理コストの面から、イオン交換よりも電気透析法を検討するべきである。",
          "油分やコロイド状有機物などを多量に含む原水を直接通すと、イオン交換樹脂の性能が劣化するので前処理を行う必要がある。",
          "一般的に、イオン交換樹脂の再生には次亜塩素酸ナトリウムなどの酸化剤が用いられる。",
        ],
        answer: 4,
      },
      {
        id: "r07-osuishori-07",
        question: "膜分離法に関する記述として、誤っているものはどれか。",
        choices: [
          "精密ろ過は、微細な懸濁粒子や細菌などの除去に用いられる。",
          "逆浸透法では、濃厚溶液側に浸透圧以上の圧力をかけると、水溶液中の水が半透膜を通過して希薄溶液側に移動する。",
          "ナノろ過法は、逆浸透法に比べ操作圧力が低く、塩化ナトリウムの除去率が低い。",
          "海水淡水化などで用いられる多段式プロセスでは、前段逆浸透膜モジュールの濃縮液を後段逆浸透膜モジュールに通すことで、より多くの膜透過水が得られる。",
          "電気透析法は、コロイド質や有機物の除去に用いられるが、水溶性電解質である溶解塩類は除去できない。",
        ],
        answer: 4,
      },
      {
        id: "r07-osuishori-08",
        question: "汚泥脱水に関する記述として、誤っているものはどれか。",
        choices: [
          "遠心脱水機では、高速回転による遠心力を利用して汚泥を脱水し、回転体の中に内蔵されているポンプによって脱水したケーキを機外に排出する。",
          "フィルタープレス脱水機では、汚泥は加圧ポンプでろ過機の各ろ過室に押し込まれて圧搾脱水され、脱水終了後に各ろ過板を外してケーキを排出する。",
          "ベルトプレス脱水機では、汚泥をろ布の間に挟み、上下からロールを介して圧搾脱水する。",
          "スクリュープレス脱水機では、スクリューの回転によってスラッジをケージ内へ送り込み、スクリュー軸に沿ってスラッジを次第に狭隘部へ送り込み、そのときに発生する圧搾圧力によって脱水する。",
          "回転加圧脱水機では、縦に配列された2枚の対面する金属円盤フィルターと内輪及び外輪スペーサーの間に、汚泥を加圧しながら供給し、低速度で金属フィルターを回転させて圧搾し、脱水ろ過する。",
        ],
        answer: 0,
      },
      {
        id: "r07-osuishori-09",
        question: "汚泥の焼却に関する記述として、誤っているものはどれか。",
        choices: [
          "燃料消費量は、汚泥の水分量や有機物の含有量に影響される。",
          "ダイオキシン類の発生を抑制するために、適正な燃焼温度管理に留意する。",
          "流動焼却炉では、炉の中に砂などの流動媒体を入れ、この流動層内に汚泥を供給して燃焼させる。",
          "流動焼却炉は、炉内に機械的可動部がない。",
          "階段式ストーカー炉では、脱水汚泥の撹拌作用が強いため、高含水率汚泥に対しても、予備乾燥なしで対応できる。",
        ],
        answer: 4,
      },
      {
        id: "r07-osuishori-10",
        question: "汚泥の建設資材利用に関する記述として、誤っているものはどれか。",
        choices: [
          "脱水汚泥は高濃度の有機物を含有しているので、そのままアスファルトフィラーとしての利用が可能である。",
          "脱水汚泥は、セメント原料としての利用が可能である。",
          "汚泥が塩化物を高濃度に含有する場合、セメント原料としての利用の障害になる場合がある。",
          "汚泥を溶融スラグ化したものは、細砂や砕石の代替としての利用が可能である。",
          "汚泥の焼却灰は、他の材料と混合するなどにより、路盤材としての利用が可能である。",
        ],
        answer: 0,
      },
      {
        id: "r07-osuishori-11",
        question:
          "BOD 500mg/L、流量100m3/日の排水を沈殿池でSSを自然沈降させ、その越流水を活性汚泥法で処理している。沈殿池への流入水のBODは、溶解性BODと懸濁性BODが50%ずつを占め、懸濁性BODの80%が沈殿池で除去されている。活性汚泥法の曝気槽でのBOD汚泥負荷(kg BOD/(kg MLSS・日))を求めよ。曝気槽の容積は100m3、MLSS 2000mg/Lとする。",
        choices: ["0.10", "0.15", "0.20", "0.28", "0.32"],
        answer: 1,
      },
      {
        id: "r07-osuishori-12",
        question:
          "BOD 220mg/L、流量500m3/日の排水を、曝気槽容積200m3、MLSS 2000mg/L、BOD除去率90%で処理している活性汚泥法の汚泥滞留時間(日)として、最も近いものはどれか。ただし、除去BODの汚泥への転換率を0.6、内生呼吸による汚泥の自己酸化率を0.05(1/日)とし、曝気槽以外の汚泥量と処理水中のSS量は無視できるものとする。また、汚泥生成量と余剰汚泥量は等しいものとする。",
        choices: ["6", "7", "8", "9", "10"],
        answer: 4,
      },
      {
        id: "r07-osuishori-13",
        question: "各種の活性汚泥法に関する記述として、最も不適切なものはどれか。",
        choices: [
          "標準活性汚泥法の標準的なBOD汚泥負荷は、0.2～0.4kg BOD/(kg MLSS・日)である。",
          "ステップエアレーション法の標準的な汚泥滞留時間は、13～50日である。",
          "膜分離活性汚泥法では、汚泥濃度を8000～12000mg/Lに制御することができる。",
          "オキシデーションディッチ法の標準的な曝気時間は、24～48時間である。",
          "ポンプ循環式深層曝気法の反応槽の標準的な有効水深は、10～15mである。",
        ],
        answer: 1,
      },
      {
        id: "r07-osuishori-14",
        question: "生物膜法に関する記述として、最も不適切なものはどれか。",
        choices: [
          "硝化菌などの増殖速度の遅い微生物を保持できる。",
          "阻害性物質の流入や負荷変動などに対し抵抗力が強いケースが多い。",
          "SSの除去能力が高く、処理水の透視度が高い。",
          "固定床では剥離した微生物が支持体を閉塞させることがある。",
          "包括固定化法は、担体製造時に硝化菌など特定の機能を持った微生物を事前に閉じ込めたものである。",
        ],
        answer: 2,
      },
      {
        id: "r07-osuishori-15",
        question: "各種の嫌気処理法に関する記述として、誤っているものはどれか。",
        choices: [
          "嫌気ろ床(AF)は、付着汚泥、及び充塡剤間隙に捕捉された汚泥を用いる発酵槽である。",
          "嫌気流動床(AFB)は、自己造粒化したグラニュール汚泥を用いており、完全混合型発酵槽に近い。",
          "上向流式嫌気汚泥床(UASB)は、上向流による排水の一過式流入、発生ガスの上昇による穏やかな攪拌下(弱い剪断力の働く条件)で処理を行う。",
          "グラニュール汚泥膨張床(EGSB)は、UASBの高負荷型システムである。",
          "二相発酵槽システムは、加水分解や酸生成反応相とガス生成反応相を分離して行うメタン発酵システムである。",
        ],
        answer: 1,
      },
      {
        id: "r07-osuishori-16",
        question:
          "通性嫌気性細菌の脱窒素反応において、6molのNO3-を還元して窒素にするために理論的に必要とされるメタノール(CH3OH)量のmol数として、正しいものはどれか。なお、有機物は細胞合成には使用されず、呼吸にのみ消費されるものとする。反応式は以下のとおりである。\n1/5 NO3- + H+ + e- → 1/10 N2 + 2/5 H2O + 1/5 OH-\n1/6 CH3OH + 1/6 H2O → 1/6 CO2 + H+ + e-",
        choices: ["2", "3", "4", "5", "6"],
        answer: 3,
      },
      {
        id: "r07-osuishori-17",
        question:
          "生物学的脱りん法及びそれに寄与する細菌に関する記述として、誤っているものはどれか。",
        choices: [
          "嫌気状態では、細胞内に蓄積したポリりん酸が分解するため、活性汚泥混合液中のりん酸の濃度が上昇する。",
          "嫌気状態では、活性汚泥混合液中の有機物が摂取されて細胞内に貯蔵される。",
          "好気状態では、細胞内貯蔵基質を酸化・分解して、エネルギーを生産する。",
          "好気状態では、ポリりん酸の顆粒が生成される。",
          "最終沈殿池において、汚泥から顆粒状のポリりん酸が分離されることにより、りんが除去される。",
        ],
        answer: 4,
      },
      {
        id: "r07-osuishori-18",
        question: "酸化還元装置とその維持管理に関する記述として、誤っているものはどれか。",
        choices: [
          "酸化剤又は還元剤の注入にあたっては、酸化還元電位計(ORP計)を用いて所定の電位になるように制御する。",
          "水素イオンが関与する酸化還元反応では、pHを一定に制御した条件下において酸化還元電位制御で薬品を注入する。",
          "酸化還元電位計は、電極面の汚れを清掃し、pH電極と同様に定期的に標準液を用いて校正する。",
          "酸化還元反応を利用して処理される代表的な排水としては、めっき排水があり、クロム酸の硫酸鉄(Ⅱ)による還元や、シアンの次亜塩素酸ナトリウムによる酸化などが行われる。",
          "有機物の処理に化学酸化を利用する場合では、次亜塩素酸ナトリウムの添加や、オゾンを含む空気の吹き込みが行われる。このような場合、ORP制御は行わないのが普通である。",
        ],
        answer: 2,
      },
      {
        id: "r07-osuishori-19",
        question: "膜処理装置とその維持管理に関する記述として、誤っているものはどれか。",
        choices: [
          "膜の目詰まり対策として、クロスフローによる剪断力で膜面のケーキ層を圧密化して除去する方法などがある。",
          "膜の細孔の目詰まり対策として薬液洗浄をする場合は、次亜塩素酸ナトリウム、水酸化ナトリウム、クエン酸、シュウ酸、膜洗浄剤(界面活性剤など)などを用いることが多い。",
          "逆浸透膜装置は、海水の淡水化などに使用されるが、モジュールが浮遊物質により閉塞しやすいため、通常、前処理でできるだけ浮遊物質を除く必要がある。",
          "従来の沈殿やろ過装置に代わって、UF膜やMF膜が用いられた膜分離活性汚泥法や凝集処理膜分離装置などが実用化されている。",
          "浮遊物質濃度の高い排水の固液分離装置として使用する場合は、圧力損失を小さくするため、低負荷運転により安定した連続運転を図る。",
        ],
        answer: 0,
      },
      {
        id: "r07-osuishori-20",
        question:
          "フレーム原子吸光分析法に関する記述中、下線を付した箇所のうち、誤っているものはどれか。\n\n試料中に含まれる分析対象元素をフレーム(炎)中で(1)励起状態にある原子とし、その(2)原子蒸気層に原子の(3)共鳴線を透過させたときの吸光度を測定することによって濃度を求める。測定用の光源には(4)中空陰極ランプが、紫外部全域にわたるバックグラウンド補正用の光源には(5)重水素ランプが主に用いられる。",
        choices: ["励起状態", "原子蒸気層", "共鳴線", "中空陰極ランプ", "重水素ランプ"],
        answer: 0,
      },
      {
        id: "r07-osuishori-21",
        question: "排水のBODの測定に用いる植種液に関する記述として、誤っているものはどれか。",
        choices: [
          "十分に生物化学的平衡に達していない下水は好ましくない。",
          "新鮮な生下水を20℃又は室温で24～36時間放置した後に、その上澄み液を用いる。",
          "硝化生物の多い下水の上澄み液が好ましい。",
          "植種液として下水の上澄み液を用いたときに正常なBODを示さない場合には、土壌抽出液などを用いる。",
          "排水の放流を受けている河川の放流地点から500～1000m下流の水を植種液に用いると、良好な結果を得ることがある。",
        ],
        answer: 2,
      },
      {
        id: "r07-osuishori-22",
        question: "溶存酸素の測定に関する記述として、誤っているものはどれか。",
        choices: [
          "ミラー変法は、アルカリ性かつ酒石酸塩の存在下で、試料中の溶存酸素が鉄(Ⅱ)を鉄(Ⅲ)とする反応を利用した方法である。",
          "隔膜電極法は、隔膜電極を試料に浸漬して溶存酸素を測定する方法で、隔膜を透過した酸素が還元されて生じる電流を測定している。",
          "ポリエチレンや四ふっ化エチレン樹脂(テフロン)は、隔膜電極法の隔膜に使用される。",
          "光学式センサ法で用いる光学式センサは、蛍光物質やりん光物質などを塗布したセンサキャップ、励起光源、光検出部などから構成される。",
          "よう素滴定法は、溶存酸素の標準的な定量法であり、酸化性及び還元性物質、懸濁物、着色物質の影響を受けにくい。",
        ],
        answer: 4,
      },
      {
        id: "r07-osuishori-23",
        question:
          "排水のCODの測定に関する記述中、下線を付した箇所のうち、誤っているものはどれか。\n\n試料を(1)硫酸酸性とし、酸化剤として(2)過マンガン酸カリウムを加え、(3)沸騰水浴中で(4)5分間反応させ、そのとき消費された酸化剤の量を求め、相当する酸素の量で表す。\nこの試験は、試料採取後直ちに行うことが望ましいが、直ちに行えない場合には、(5)0～10℃の暗所で保存し、できるだけ早く試験する。",
        choices: ["硫酸酸性", "過マンガン酸カリウム", "沸騰水浴中", "5分間", "0～10℃の暗所"],
        answer: 3,
      },
      {
        id: "r07-osuishori-24",
        question: "全窒素の測定に関する記述として、誤っているものはどれか。",
        choices: [
          "総和法では二つの試料をとり、その片方で亜硝酸イオンと硝酸イオンに相当する窒素の量を、他方でアンモニウムイオンと有機体の窒素化合物に相当する窒素の量を求め、それらの和を全窒素とする。",
          "紫外線吸光光度分析法では、試料にペルオキソ二硫酸カリウムの酸性溶液を加えて、加熱酸化分解を行う。",
          "紫外線吸光光度分析法では、分解終了後の試料溶液のpHを2～3に調節し、硝酸イオンによる波長220nmの吸光度を測定する。",
          "流れ分析法は、懸濁物質の多い試料をそのまま測定するのには適していない。",
          "流れ分析法の一種である酸化分解・紫外検出FIA法では、試料中の窒素化合物を酸化分解し、その結果生じる硝酸イオンを定量し、全窒素量を求める。",
        ],
        answer: 1,
      },
      {
        id: "r07-osuishori-25",
        question:
          "排水のTOCの測定に関する記述中、下線を付した箇所のうち、誤っているものはどれか。\n\n燃焼酸化－赤外線式TOC自動計測法では、計測器に供給した試料の(1)pHを10以上とし、通気して(2)全無機体炭素を除去した後、その一定量をキャリヤーガスとともに(3)高温の全炭素測定管に送り込み、有機物中の炭素を(4)二酸化炭素とする。その濃度を(5)非分散形赤外線ガス分析計で測定して、TOCの濃度を求める。",
        choices: ["pHを10以上", "全無機体炭素", "高温の全炭素測定管", "二酸化炭素", "非分散形赤外線ガス分析計"],
        answer: 0,
      },
    ],
  },
];

const INK = "#26323d";
const INK_TINT = "#eef1f3";
const PAPER = "#f7f6f1";
const RULE = "#d8d3c4";
const RED = "#b23a2f";

// Choices like "ア:f イ:c ウ:e エ:a オ:b カ:d" read as dense text.
// Lay them out with natural wrapping so nothing splits mid-pair and it
// balances at any container width.
function ChoiceText({ text }) {
  const parts = text.split(/[\s　]+/).filter(Boolean);
  const isSlotStyle = parts.length >= 2 && parts.every((p) => p.includes(":"));

  if (!isSlotStyle) {
    return <span style={{ paddingTop: 1, lineHeight: 1.6 }}>{text}</span>;
  }

  return (
    <span
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: 20,
        rowGap: 7,
        paddingTop: 1,
      }}
    >
      {parts.map((p, idx) => {
        const [label, value] = p.split(":");
        return (
          <span
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 6,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "'Hiragino Mincho ProN', serif",
                fontSize: 13,
                color: "#5b5748",
              }}
            >
              {label}
            </span>
            <span style={{ color: "#a89f8c" }}>―</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>{value}</span>
          </span>
        );
      })}
    </span>
  );
}

function QuestionText({ text }) {
  // Highlight fill-in-blank markers like (ア)(イ)(ウ) and the numeric
  // underline-reference markers like (1)(2)(3) so they don't blend into
  // the surrounding sentence.
  const segments = text.split(/(\([ア-ヶ]\)|\([1-9]\)|\([a-z]\))/g);
  return (
    <>
      {segments.map((seg, i) =>
        /^(\([ア-ヶ]\)|\([1-9]\)|\([a-z]\))$/.test(seg) ? (
          <span
            key={i}
            style={{
              color: RED,
              fontWeight: 700,
              padding: "0 2px",
            }}
          >
            {seg}
          </span>
        ) : (
          <span key={i}>{seg}</span>
        )
      )}
    </>
  );
}

function makeInitialAnswers(subjectIdx) {
  return SUBJECTS[subjectIdx].questions.map(() => ({
    selected: null,
    answered: false,
  }));
}

export default function KakomonQuiz() {
  const [subjectIdx, setSubjectIdx] = useState(0);
  const [index, setIndex] = useState(0);
  const [answersBySubject, setAnswersBySubject] = useState(
    SUBJECTS.map((_, i) => makeInitialAnswers(i))
  );

  const subject = SUBJECTS[subjectIdx];
  const questions = subject.questions;
  const answers = answersBySubject[subjectIdx];
  const q = questions[index];
  const current = answers[index];
  const isCorrect = current.selected === q.answer;

  const isLastQuestionOfSubject = index === questions.length - 1;
  const isLastSubject = subjectIdx === SUBJECTS.length - 1;
  const subjectComplete = answers.every((a) => a.answered);

  const updateCurrent = (patch) => {
    setAnswersBySubject((prev) => {
      const next = prev.map((arr) => arr);
      const subjArr = [...next[subjectIdx]];
      subjArr[index] = { ...subjArr[index], ...patch };
      next[subjectIdx] = subjArr;
      return next;
    });
  };

  const choose = (i) => {
    updateCurrent({ selected: i, answered: false });
  };

  const submit = () => {
    if (current.selected === null || current.answered) return;
    updateCurrent({ answered: true });
  };

  const switchSubject = (newIdx) => {
    if (newIdx < 0 || newIdx >= SUBJECTS.length || newIdx === subjectIdx) return;
    setSubjectIdx(newIdx);
    setIndex(0);
  };

  const goNext = () => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
    } else if (!isLastSubject) {
      switchSubject(subjectIdx + 1);
    }
  };

  const goPrev = () => {
    if (index === 0) return;
    const target = index - 1;
    setAnswersBySubject((prev) => {
      const next = prev.map((arr) => arr);
      const subjArr = [...next[subjectIdx]];
      subjArr[target] = { selected: null, answered: false };
      next[subjectIdx] = subjArr;
      return next;
    });
    setIndex(target);
  };

  return (
    <div
      style={{
        minHeight: "100%",
        background: PAPER,
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(38,50,61,0.05) 0px, rgba(38,50,61,0.05) 1px, transparent 1px, transparent 28px)",
        fontFamily: "'Hiragino Mincho ProN', 'Yu Mincho', serif",
        color: INK,
        padding: "32px 16px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {/* title */}
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "#6b6355",
            fontFamily: "'Hiragino Sans', sans-serif",
            marginBottom: 10,
          }}
        >
          公害防止管理者試験(水質関係) 過去問演習
        </div>

        {/* subject tabs */}
        <div
          style={{
            display: "flex",
            borderBottom: `2px solid ${INK}`,
            marginBottom: 24,
          }}
        >
          {SUBJECTS.map((s, i) => {
            const active = i === subjectIdx;
            return (
              <button
                key={s.key}
                onClick={() => switchSubject(i)}
                style={{
                  fontFamily: "'Hiragino Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  color: active ? INK : "#8a8270",
                  background: active ? "#fff" : "transparent",
                  border: "none",
                  borderTop: `1px solid ${active ? RULE : "transparent"}`,
                  borderLeft: `1px solid ${active ? RULE : "transparent"}`,
                  borderRight: `1px solid ${active ? RULE : "transparent"}`,
                  borderBottom: active ? `2px solid #fff` : "2px solid transparent",
                  marginBottom: "-2px",
                  padding: "10px 16px",
                  cursor: "pointer",
                }}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* progress: per-question ○× list on the left, 問X/Y on the right */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "'Hiragino Sans', sans-serif",
            fontSize: 13,
            color: "#6b6355",
            marginBottom: 14,
            gap: 12,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 8px" }}>
            {answers.map((a, i) => {
              const isCurrentQ = i === index;
              let mark = "－";
              let markColor = "#c9c3b4";
              if (a.answered) {
                const correct = a.selected === questions[i].answer;
                mark = correct ? "○" : "×";
                markColor = RED;
              }
              return (
                <span
                  key={i}
                  title={`問${i + 1}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    fontSize: 13,
                    fontWeight: 700,
                    color: markColor,
                    borderRadius: "50%",
                    outline: isCurrentQ ? `1px solid ${INK}` : "none",
                  }}
                >
                  {mark}
                </span>
              );
            })}
          </div>
          <div style={{ flexShrink: 0 }}>
            問 {index + 1} / {questions.length}
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 15, lineHeight: 1.9, whiteSpace: "pre-wrap" }}>
            <QuestionText text={q.question} />
          </div>
        </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {q.choices.map((c, i) => {
                const isSelected = current.selected === i;
                const isAnswerChoice = current.answered && i === q.answer;
                const isWrongPick = current.answered && isSelected && i !== q.answer;

                let borderColor = RULE;
                let borderWidth = "1.5px";
                let bg = "#fff";

                if (isSelected && !current.answered) {
                  borderColor = INK;
                  borderWidth = "3px";
                  bg = INK_TINT;
                }
                if (isAnswerChoice) {
                  borderColor = RED;
                  borderWidth = "2px";
                  bg = "#fdf1ef";
                }
                if (isWrongPick) {
                  borderColor = INK;
                  borderWidth = "3px";
                  bg = INK_TINT;
                }

                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      textAlign: "left",
                      padding: "12px 14px",
                      background: bg,
                      border: `${borderWidth} solid ${borderColor}`,
                      borderRadius: 3,
                      cursor: "pointer",
                      fontFamily: "'Hiragino Sans', sans-serif",
                      fontSize: 14,
                      color: INK,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        fontFamily: "'Hiragino Mincho ProN', serif",
                        fontWeight: 700,
                        minWidth: 26,
                        textAlign: "center",
                        border: `${isSelected && !current.answered ? "2px" : "1px"} solid ${
                          isSelected && !current.answered ? INK : "#a89f8c"
                        }`,
                        borderRadius: 2,
                        padding: "1px 0",
                      }}
                    >
                      {i + 1}
                    </span>
                    <ChoiceText text={c} />
                    {isAnswerChoice && (
                      <span style={{ marginLeft: "auto", color: RED, fontSize: 20, fontWeight: 700 }}>
                        ○
                      </span>
                    )}
                    {isWrongPick && (
                      <span style={{ marginLeft: "auto", color: RED, fontSize: 18, fontWeight: 700 }}>
                        ×
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div
              style={{
                marginTop: 20,
                minHeight: 22,
                fontFamily: "'Hiragino Sans', sans-serif",
                fontSize: 14,
                color: RED,
                fontWeight: 700,
              }}
            >
              {current.answered
                ? isCorrect
                  ? "○ 正解"
                  : `× 不正解（正解：${q.answer + 1}）`
                : ""}
            </div>

            <div
              style={{
                marginTop: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                onClick={goPrev}
                disabled={index === 0}
                style={{
                  fontFamily: "'Hiragino Sans', sans-serif",
                  background: "transparent",
                  color: index === 0 ? "#c9c3b4" : INK,
                  border: `1.5px solid ${index === 0 ? "#e3ddcf" : INK}`,
                  borderRadius: 3,
                  padding: "10px 22px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: index === 0 ? "default" : "pointer",
                }}
              >
                ← 前の問題へ
              </button>

              {!current.answered ? (
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={goNext}
                    disabled={isLastQuestionOfSubject && isLastSubject}
                    style={{
                      fontFamily: "'Hiragino Sans', sans-serif",
                      background: "transparent",
                      color:
                        isLastQuestionOfSubject && isLastSubject
                          ? "#c9c3b4"
                          : INK,
                      border: `1.5px solid ${
                        isLastQuestionOfSubject && isLastSubject
                          ? "#e3ddcf"
                          : INK
                      }`,
                      borderRadius: 3,
                      padding: "10px 20px",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor:
                        isLastQuestionOfSubject && isLastSubject
                          ? "default"
                          : "pointer",
                    }}
                  >
                    未回答でスキップ
                  </button>
                  <button
                    onClick={submit}
                    disabled={current.selected === null}
                    style={{
                      fontFamily: "'Hiragino Sans', sans-serif",
                      background: current.selected === null ? "#c9c3b4" : INK,
                      color: PAPER,
                      border: "none",
                      borderRadius: 3,
                      padding: "10px 28px",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: current.selected === null ? "default" : "pointer",
                    }}
                  >
                    解答する
                  </button>
                </div>
              ) : (
                <button
                  onClick={goNext}
                  disabled={isLastQuestionOfSubject && isLastSubject}
                  style={{
                    fontFamily: "'Hiragino Sans', sans-serif",
                    background:
                      isLastQuestionOfSubject && isLastSubject ? "#c9c3b4" : INK,
                    color: PAPER,
                    border: "none",
                    borderRadius: 3,
                    padding: "10px 28px",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor:
                      isLastQuestionOfSubject && isLastSubject
                        ? "default"
                        : "pointer",
                  }}
                >
                  {!isLastQuestionOfSubject
                    ? "次の問題へ"
                    : isLastSubject
                    ? "全科目 終了"
                    : `次の科目へ（${SUBJECTS[subjectIdx + 1].label}）`}
                </button>
              )}
            </div>

            {isLastQuestionOfSubject && current.answered && subjectComplete && (
              <div
                style={{
                  marginTop: 14,
                  fontFamily: "'Hiragino Sans', sans-serif",
                  fontSize: 13,
                  color: "#6b6355",
                  textAlign: "right",
                }}
              >
                {subject.label}：全{questions.length}問 解答済み
              </div>
            )}
      </div>
    </div>
  );
}
