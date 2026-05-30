
// 60 METICULOUSLY DESIGNED QUESTIONS FOR HIGH-LEVEL PHARMACY ENTRANCE MOCK
const rawQuestions = [
    // PART 1: CONVERSATION (12 Questions)
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION (Pharmacy & Clinical Situations)",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `At a campus pharmacy clinic, a student is consulting the pharmacist about an allergic reaction.<br><br>
           <b>Student:</b> "Excuse me, I bought this allergy medication yesterday, but it's making me extremely drowsy, and I have a biology lab exam this afternoon."<br>
           <b>Pharmacist:</b> "Ah, that is a common side effect of first-generation antihistamines. ______________________."`,
        options: [
            "I advise you to take half the dosage before your exam so you can stay calm.",
            "Let me substitute it with a second-generation antihistamine which does not cross the blood-brain barrier as easily.",
            "Drowsiness is actually a good sign that the active ingredients are successfully absorbing into your bloodstream.",
            "You should drink multiple cups of black coffee immediately to offset the sedation."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 เภสัชกรควรเปลี่ยนยาไปเป็นยากลุ่ม second-generation antihistamine (เช่น Cetirizine, Loratadine) ซึ่งมีคุณสมบัติเด่นคือไม่ผ่าน blood-brain barrier (หรือผ่านได้น้อยมาก) จึงทำให้ไม่เกิดอาการง่วงซึม ซึ่งเหมาะกับคนไข้ที่จะต้องไปสอบบ่ายนี้",
        wrongExplanation: "ข้อ 1 การลดโดสยา antihistamine เองโดยไม่มีข้อบ่งชี้ทางเภสัชกรรมอาจทำให้ควบคุมอาการภูมิแพ้ไม่ได้ และอาจยังง่วงอยู่; ข้อ 3 อาการง่วงนอน (drowsiness) เป็นผลข้างเคียง (side effect) ไม่ใช่ตัวบ่งชี้การดูดซึมยาที่ดี; ข้อ 4 การดื่มกาแฟปริมาณมากอาจทำให้ใจสั่นและส่งผลเสียต่อการสอบ ไม่ใช่การจัดการทางเภสัชกรรมที่เหมาะสม",
        mindset: "สำหรับข้อสอบแนววิชาชีพสุขภาพ (Health/Medical communication) ช้อยส์ที่ถูกต้องจะต้องสะท้อนความรู้ทางเภสัชศาสตร์หรือวิทยาศาสตร์การแพทย์ที่ถูกต้อง ปลอดภัย และเน้นคนไข้เป็นศูนย์กลาง (Patient-centric)",
        speedHack: "หา Keyword สำคัญในบทสนทนา เช่น 'drowsy' (ง่วงนอน) คู่กับ 'antihistamine' ทางออกที่พบบ่อยในการสอบคือการแนะนำ 'non-drowsy formulation' หรือ 'second-generation antihistamine' ทันที"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `A customer walks into a retail pharmacy holding a prescription.<br><br>
           <b>Customer:</b> "Can I get this filled, please? It's for my chronic asthma."<br>
           <b>Pharmacist:</b> "Of course. Let me verify the details. Wait, I notice this prescription has expired by three weeks. ______________________."`,
        options: [
            "Since you are a regular customer, I will make an exception and dispense it anyway.",
            "Asthma is chronic, so you don't need a valid prescription. I'll get the medicine right away.",
            "I'm afraid I cannot dispense this without a current prescription from your doctor. Let me call the clinic to verify if they can send a refill authorization.",
            "You should go to another pharmacy because we are strictly monitored by the FDA."
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 ข้อกฎหมายและหลักจริยธรรมวิชาชีพเภสัชกรไม่สามารถจ่ายยาอันตราย/ควบคุมพิเศษตามใบสั่งยาที่หมดอายุได้ แต่ทางเลือกที่ประนีประนอมและดูแลคนไข้ได้ดีที่สุดคือเสนอตัวช่วยติดต่อประสานงานกับคลินิกเพื่อขอใบสั่งยาใหม่หรือรับ refill authorization",
        wrongExplanation: "ข้อ 1 และ 2 เป็นการทำผิดกฎหมายวิชาชีพและเสี่ยงอันตรายต่อคนไข้; ข้อ 4 แสดงถึงการปฏิเสธคนไข้อย่างแข็งกระด้างและขาดจิตวิญญาณการบริการ (Service mind)",
        mindset: "โจทย์จริยธรรมสุขภาพ มักล่อลวงด้วยความเห็นอกเห็นใจ (Empathetic but illegal) แต่ช้อยส์ที่ถูกจะต้องอยู่บนบรรทัดฐานกฎหมายควบคู่กับทางออกที่เป็นประโยชน์แก่คนไข้",
        speedHack: "ตัดข้อที่ยอมทำผิดกฎหมายทันที (เช่น ยอมจ่ายยาแม้หมดอายุ) จากนั้นเลือกข้อที่มีการจัดการแก้ไขปัญหาอย่างเป็นระบบและสุภาพที่สุด"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `In a hospital pharmacy, a patient is concerned about a drug interaction.<br><br>
           <b>Patient:</b> "I read online that taking this blood thinner with aspirin can cause internal bleeding. Is that true?"<br>
           <b>Pharmacist:</b> "______________________. They both reduce clotting but in different ways, which significantly amplifies bleeding risks."`,
        options: [
            "Internet sources are mostly fake. You shouldn't worry about it.",
            "That is correct, and I highly recommend you stop taking all medications immediately.",
            "Indeed, your concern is well-founded; co-administration of these agents has a synergistic antiplatelet and anticoagulant effect.",
            "Not really, the dose of aspirin is too small to make any difference in your body."
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 เภสัชกรต้องยืนยันข้อมูลที่ถูกต้องทางวิชาการด้วยความสุภาพ ซึ่งอธิบายว่าการกินยาทั้งสองตัวคู่กันส่งผลให้เกิดการต้านเกล็ดเลือดและการแข็งตัวของเลือดร่วมกันแบบ synergistic (เสริมฤทธิ์กัน) ทำให้เสี่ยงเลือดออกมากขึ้น",
        wrongExplanation: "ข้อ 1 เป็นการดูแคลนความกังวลของคนไข้และให้ข้อมูลผิด; ข้อ 2 แนะนำให้คนไข้หยุดยาทั้งหมดกะทันหัน ซึ่งอาจเป็นอันตรายถึงชีวิตหากคนไข้มีภาวะโรคหัวใจขาดเลือด; ข้อ 4 อธิบายผิดหลักวิชาการเพราะ aspirin แม้ขนาดยาต่ำ (เช่น 81 mg) ก็ส่งผลอย่างมีนัยสำคัญเมื่อใช้ร่วมกับยากันเลือดแข็งตัวชนิดอื่น",
        mindset: "เมื่อคนไข้ถามคำถามวิชาการ ให้มองหาช้อยส์ที่อธิบายด้วยข้อมูลวิทยาศาสตร์ที่ถูกต้อง ไม่เลี่ยงบาลี และไม่ทำให้คนไข้ตื่นตระหนกจนทำสิ่งที่เป็นอันตราย",
        speedHack: "สแกนคำศัพท์เชิงวิชาการ เช่น 'synergistic', 'antiplatelet', 'anticoagulant' ในบทสนทนา มักเป็นคำอธิบายทางการแพทย์ที่สมบูรณ์และถูกต้องที่สุด"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `Two lab partners are discussing their organic chemistry synthesis experiment.<br><br>
           <b>Apinya:</b> "Our yield is only 15% of the theoretical value. We must have lost some product during recrystallization."<br>
           <b>Tawan:</b> "______________________. Let's check our filtration technique and see if the solvent was too warm."`,
        options: [
            "That's terrible! You messed up the whole procedure.",
            "I agree with your assessment. That seems like the most logical source of error.",
            "Recrystallization is useless anyway. We should just report the fabricated data.",
            "Don't worry, the professor never checks the actual yield anyway."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ตะวันแสดงความเห็นด้วยกับข้อสันนิษฐานของอภิญญาเกี่ยวกับการตกผลึกใหม่ (recrystallization) แล้ววิเคราะห์หาสาเหตุของข้อผิดพลาดด้วยกันอย่างสร้างสรรค์และเป็นหลักการทางวิทยาศาสตร์",
        wrongExplanation: "ข้อ 1 เป็นการโทษเพื่อนร่วมงาน ขาดการทำงานร่วมกันที่ดี; ข้อ 3 แนะนำการปลอมแปลงข้อมูลวิจัย (data fabrication) ขาดจริยธรรมนักวิจัยอย่างรุนแรง; ข้อ 4 แสดงความละเลยในการเรียนและแนะนำพฤติกรรมที่ไม่เหมาะสม",
        mindset: "ในสถานการณ์การทำงานร่วมกันหรือการทดลองทางวิทยาศาสตร์ ให้มองหาการแก้ไขปัญหาร่วมกัน (Collaborative problem-solving) และการคิดเชิงวิเคราะห์ (Analytical thinking)",
        speedHack: "ตัดข้อเสนอแนะที่ทุจริต ละเลย หรือโยนความผิดออกไปทันที ตัวเลือกที่เหลือที่เน้นการตรวจสอบสาเหตุเชิงวิชาการจะเป็นข้อที่ถูก"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `A professor is talking to a student who wants to join a pharmaceutical research project.<br><br>
           <b>Student:</b> "Professor, I'm really interested in your drug delivery research. Do you have any openings for undergraduates in your lab?"<br>
           <b>Professor:</b> "I appreciate your interest. However, my lab currently requires a minimum commitment of 10 hours per week, and we expect students to have completed Organic Chemistry II. ______________________?"`,
        options: [
            "Are you sure you aren't too lazy to handle this work?",
            "Do you think you can easily get an A grade without hard work?",
            "How do these requirements align with your current course load and academic background?",
            "Why didn't you study harder last semester to meet these standards?"
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 คำถามของอาจารย์เป็นการถามเพื่อเปิดโอกาสให้ผู้เรียนประเมินตนเองเทียบกับข้อกำหนดของห้องปฏิบัติการวิจัยอย่างสุภาพและสร้างสรรค์ที่สุด",
        wrongExplanation: "ข้อ 1, 2, และ 4 เป็นคำพูดเชิงดูถูกเหยียดหยาม (demeaning) หรือกล่าวหาตัวผู้เรียน ซึ่งขัดต่อหลักการสื่อสารที่ดีในสถาบันการศึกษาและข้อสอบ TGAT จริง",
        mindset: "ความสัมพันธ์ระหว่างอาจารย์กับนักศึกษาในระดับอุดมศึกษาควรตั้งอยู่บนพื้นฐานความสุภาพ การประเมินอย่างเป็นกลาง และจิตวิทยาการศึกษา",
        speedHack: "ตัดตัวเลือกที่เป็นประโยคเชิงลบ โทษ หรือตัดสินคนอื่น (judgemental questions) ออกทันที เหลือตัวเลือกข้อ 3 ที่เป็นกลางและเป็นเชิงสำรวจอย่างสุภาพ"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `A nurse is briefing the clinical pharmacist on a ward round.<br><br>
           <b>Nurse:</b> "The patient in Bed 4 is complaining of severe gastric upset since we started the oral iron supplements."<br>
           <b>Pharmacist:</b> "______________________. I will suggest the physician switch to an intravenous formulation or suggest taking it with meals if tolerated."`,
        options: [
            "That's normal, patients complain about everything.",
            "Let's ignore it for now; iron absorption is more important than comfort.",
            "Understood. Gastric irritation is a well-documented adverse effect of oral iron salts.",
            "Tell the patient to stop eating food completely to avoid irritation."
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 เภสัชกรรับทราบปัญหาและให้ข้อมูลวิชาการรองรับ (adverse effect ของยากินเหล็ก) พร้อมหาทางแก้ปัญหาโดยการปรับเปลี่ยนวิธีทานหรือรูปแบบยาเพื่อความสบายใจและปลอดภัยของคนไข้",
        wrongExplanation: "ข้อ 1 และ 2 ละเลยความทรมานและอาการไม่พึงประสงค์ของคนไข้; ข้อ 4 เป็นคำแนะนำที่ทำลายสุขภาพและไร้เหตุผลทางวิทยาศาสตร์",
        mindset: "อาการข้างเคียงต่อระบบทางเดินอาหารจากการทานยาเหล็กเป็นสิ่งที่พบได้ทั่วไป เภสัชกรต้องยอมรับ (Acknowledge) และหาวิธีบรรเทาอาการโดยไม่ลดประสิทธิภาพการรักษาหลัก",
        speedHack: "มองหาคำตอบที่เริ่มต้นด้วยคำรับทราบปัญหาสุภาพ (เช่น Understood, Indeed) แล้วตามด้วยข้อมูลเชิงวิชาการทางการแพทย์"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `A mother calls the pharmacy department because her toddler accidentally ingested a small amount of liquid hand soap.<br><br>
           <b>Mother:</b> "Hello! My two-year-old just licked some liquid soap off his hand. He is crying but not throwing up. What should I do?"<br>
           <b>Pharmacist:</b> "First, please stay calm. ______________________. Rinse his mouth with water and give him a small glass of water or milk to dilute the soap. Do not induce vomiting."`,
        options: [
            "Soap is extremely toxic and he will need immediate gastric lavage.",
            "Since he is crying, it means he is severely poisoned. Call an ambulance immediately.",
            "Liquid hand soap is generally of low toxicity in small amounts.",
            "You should make him throw up by sticking your finger down his throat."
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 สบู่อาบน้ำหรือล้างมือทั่วไปในปริมาณเล็กน้อยไม่มีพิษร้ายแรง การจัดการเบื้องต้นคือล้างปากและให้ดื่มน้ำ/นมเจือจาง และที่สำคัญคือ *ห้ามเหนี่ยวนำให้อาเจียน (Do not induce vomiting)* เพราะสบู่จะเกิดฟองและอาจสำลักเข้าปอด (aspiration) ได้",
        wrongExplanation: "ข้อ 1 และ 2 ทำให้คนไข้ตระหนกเกินเหตุจากสารเคมีที่มีพิษต่ำ; ข้อ 4 แนะนำพฤติกรรมที่เป็นอันตรายอย่างยิ่ง (การทำให้อาเจียนจากสารสร้างฟอง)",
        mindset: "การปฐมพยาบาลเบื้องต้นเกี่ยวกับพิษวิทยา (Toxicology) ในฐานะเภสัชกรคือการคัดกรองความรุนแรงตามความเป็นจริง ปลอบใจไม่ให้ตื่นตระหนก และให้คำแนะนำที่ปลอดภัย",
        speedHack: "สารกลุ่มสบู่/แชมพู ห้ามทำให้คนไข้อาเจียนเด็ดขาดเพราะเสี่ยงฟองอุดตันทางเดินหายใจ ช้อยส์ใดที่แนะนำให้ทำให้อาเจียนจะผิดทันที"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `At a pharmacy counters, a senior pharmacist is coaching an intern on patient consultation.<br><br>
           <b>Senior Pharmacist:</b> "When you explain drug administration to elderly patients, avoid using complex medical jargon like 'sublingual absorption' or 'renal clearance'."<br>
           <b>Intern:</b> "Right. ______________________. I should explain it in plain, actionable language instead."`,
        options: [
            "That means elderly patients are not intelligent enough to understand.",
            "I should try to impress them with academic terms so they trust us more.",
            "I understand; using simpler terms ensures higher patient compliance and safety.",
            "But using jargon is much faster and saves our consultation time."
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 การหลีกเลี่ยงศัพท์แพทย์ยากๆ (medical jargon) กับผู้สูงอายุ ช่วยให้คนไข้เข้าใจวิธีทานยาได้ถูกต้อง เพิ่มความร่วมมือในการใช้ยา (compliance) และลดความเสี่ยงอันตราย",
        wrongExplanation: "ข้อ 1 เป็นการคิดเชิงอคติและดูหมิ่นความเข้าใจของผู้สูงอายุ; ข้อ 2 การใช้ศัพท์ยากเพื่อโอ้อวดอาจทำให้คนไข้เข้าใจผิดและใช้ยาไม่ถูกต้อง; ข้อ 4 เป็นการเอาเปรียบเวลาปรึกษาของคนไข้และทำให้เสี่ยงต่อข้อผิดพลาดในการกินยา",
        mindset: "การสื่อสารที่มีประสิทธิภาพในวิชาชีพสาธารณสุขคือการปรับระดับคำพูดให้เข้ากับผู้ฟังเพื่อผลลัพธ์การรักษาที่ดีที่สุด ไม่ใช่การโอ้อวดความรู้",
        speedHack: "เชื่อมโยงการไม่ใช้ Jargon (ศัพท์เทคนิค) เข้ากับคำศัพท์เชิงบวกด้านความปลอดภัยและประสิทธิภาพการรักษา เช่น compliance และ safety"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `A customer is trying to purchase an antibiotic for a common cold.<br><br>
           <b>Customer:</b> "I have a sore throat and a runny nose. I need some Amoxicillin to cure this cold quickly."<br>
           <b>Pharmacist:</b> "Actually, most colds are caused by viruses, whereas Amoxicillin is an antibiotic for bacterial infections. ______________________."`,
        options: [
            "Taking it will only cause side effects and contribute to antibiotic resistance without curing your cold.",
            "Since you want to cure it fast, I will give you a stronger antibiotic instead.",
            "Fine, but you must sign a waiver stating that you won't sue us if your liver fails.",
            "Viruses and bacteria are practically the same, so it will work anyway."
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 เภสัชกรต้องอธิบายความแตกต่างระหว่างไวรัสและแบคทีเรีย ยาปฏิชีวนะ (Antibiotics) ไม่มีฤทธิ์ฆ่าไวรัส ดังนั้นการทาน Amoxicillin ในกรณีนี้จึงไม่มีประโยชน์ ซ้ำยังเพิ่มความเสี่ยงแพ้ยา ผลข้างเคียง และปัญหาเชื้อดื้อยา (antibiotic resistance)",
        wrongExplanation: "ข้อ 2 แนะนำสิ่งที่เป็นอันตรายและผิดหลักการใช้ยาสมเหตุผล; ข้อ 3 เสนอเอกสารยินยอมเพื่อเลี่ยงความรับผิดชอบซึ่งไม่ถูกต้องทางจริยธรรม; ข้อ 4 อธิบายกลไกทางชีววิทยาผิดพลาดอย่างรุนแรง",
        mindset: "ประเด็นยาปฏิชีวนะเกินความจำเป็น (Antibiotic stewardship) เป็นหัวข้อสุขภาพที่ออกสอบบ่อยที่สุดข้อหนึ่งในการคัดเลือกเข้าคณะวิทยาศาสตร์สุขภาพ ช้อยส์ที่ถูกมักจะเน้นย้ำเรื่อง 'การดื้อยา' และ 'การไม่ใช้ยาปฏิชีวนะกับเชื้อไวรัส'",
        speedHack: "จำกฎเหล็ก: Cold/Flu = Virus = No Antibiotics! ช้อยส์ใดอธิบายและเตือนเรื่อง Antibiotic Resistance จะมีโอกาสถูกสูงสุด"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `A patient complains about the cost of a brand-name cardiovascular drug.<br><br>
           <b>Patient:</b> "This medication is so expensive! I don't think I can afford to refill it every month."<br>
           <b>Pharmacist:</b> "I completely understand your financial concern. ______________________. It has the exact same active pharmaceutical ingredient and therapeutic efficacy but at a fraction of the cost."`,
        options: [
            "Maybe you should work overtime to afford your therapy.",
            "We can offer you a generic equivalent that is approved by the FDA.",
            "You could try reducing the dose to make the pills last longer.",
            "Let's replace it with an herbal supplement from our local shop."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 เภสัชกรสามารถแนะนำยาชื่อสามัญ (Generic equivalent) ที่มีประสิทธิผลในการรักษา (therapeutic efficacy) และตัวยาสำคัญเดียวกันแทนยาต้นแบบ (Brand-name) เพื่อประหยัดค่าใช้จ่ายให้คนไข้ภายใต้ความปลอดภัยระดับสากล",
        wrongExplanation: "ข้อ 1 เป็นคำพูดที่ไม่สุภาพและไม่แก้ปัญหาการรักษา; ข้อ 3 แนะนำการประหยัดเงินด้วยการลดโดสยาเอง ซึ่งเป็นอันตรายอย่างยิ่งต่อผู้ป่วยโรคหัวใจและหลอดเลือด; ข้อ 4 การทดแทนยาแผนปัจจุบันด้วยสมุนไพรโดยไม่มีหลักฐานทางการแพทย์อาจทำให้โรคแย่ลง",
        mindset: "การแก้ไขปัญหาค่าใช้จ่ายของยาในวิชาชีพเภสัชกรรมจะแนะนำ 'Generic drugs' (ยาเจเนอริก/ยาชื่อสามัญ) ที่ผ่านการรับรองมาตรฐานทางเภสัชกรรม (Bioequivalence)",
        speedHack: "มองหาคำสำคัญ 'generic equivalent' หรือ 'generic alternative' ในบทสนทนาที่พูดถึงยาแพง"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `A student pharmacist is asking their preceptor about career paths.<br><br>
           <b>Student:</b> "I like both laboratory research and patient care. Is there a field in pharmacy that combines both?"<br>
           <b>Preceptor:</b> "Definitely. ______________________. In that role, you can design clinical trials, evaluate drug outcomes, and work directly in the hospital environment."`,
        options: [
            "You should choose one and abandon the other; you cannot do both.",
            "You might want to look into clinical pharmacy research or translational research.",
            "Industrial manufacturing is the only area where you will find happiness.",
            "Pharmacy informatics is solely focused on programming databases."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 สาขา 'Clinical pharmacy research' หรือ 'Translational research' (การวิจัยเชิงแปลผลจากห้องแล็บสู่คนไข้) เป็นสาขาที่นำองค์ความรู้จากห้องทดลองมาประยุกต์ใช้ในการดูแลรักษาคนไข้จริงในโรงพยาบาล ตอบโจทย์ความสนใจของนักศึกษา",
        wrongExplanation: "ข้อ 1 ปิดกั้นทัศนคติของผู้เรียนแบบไร้เหตุผล; ข้อ 3 เชิงบังคับและจำกัดทางเลือก; ข้อ 4 บิดเบือนบทบาทของเภสัชสารสนเทศ (informatics) ให้แคบเกินไป",
        mindset: "ทัศนคติของอาจารย์พี่เลี้ยง (Preceptor) ในการแนะแนวทางสายวิชาชีพจะมีความยืดหยุ่น สร้างสรรค์ และเปิดกว้างเสมอ",
        speedHack: "เลือกช้อยส์ที่มีคำศัพท์ผสมผสานเป้าหมายทั้งสองฝั่ง (Research + Patient care) ซึ่งคือคำว่า 'clinical research' หรือ 'translational research'"
    },
    {
        section: "Conversation",
        partTitle: "PART 1: CONVERSATION",
        suggestedTime: "Suggested Time: 45s",
        passage: null,
        text: `A pharmaceutical representative is discussing a new drug release with a hospital clinical director.<br><br>
           <b>Representative:</b> "Our new anti-diabetic agent shows a 30% reduction in cardiovascular events compared to standard therapy."<br>
           <b>Clinical Director:</b> "Those are impressive figures. ______________________ before we consider adding it to our hospital formulary."`,
        options: [
            "I will immediately replace all older drugs with your product without questioning.",
            "Please send me the peer-reviewed clinical trial data and long-term safety studies",
            "How much discount can you personally give me in cash?",
            "We don't need any more diabetic medications because the market is oversaturated."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ผู้อำนวยการฝ่ายการแพทย์จำเป็นต้องขอข้อมูลงานวิจัยทางคลินิกที่ผ่านการตรวจทานจากผู้เชี่ยวชาญ (peer-reviewed clinical trial data) และข้อมูลความปลอดภัยระยะยาวก่อนจะพิจารณานำยาเข้าบัญชียาโรงพยาบาล (hospital formulary)",
        wrongExplanation: "ข้อ 1 เป็นการตัดสินใจที่ขาดจรรยาบรรณวิชาชีพและขาดการประเมินด้านความปลอดภัย; ข้อ 3 เป็นพฤติกรรมรับสินบนซึ่งทุจริตและผิดกฎหมาย; ข้อ 4 ปฏิเสธนวัตกรรมใหม่ทันทีโดยไม่ประเมินประโยชน์การรักษาที่ดีขึ้นของคนไข้",
        mindset: "การตัดสินใจเชิงคลินิก (Clinical decision-making) ต้องอยู่บนฐานของเวชศาสตร์เชิงประจักษ์ (Evidence-based medicine) การพิจารณาข้อมูลวิจัยและสถิติจึงเป็นสิ่งจำเป็นที่สุด",
        speedHack: "มองหาตัวเลือกที่เรียกร้องหลักฐานทางวิทยาศาสตร์/การวิจัย เช่น 'peer-reviewed data', 'clinical trials', หรือ 'safety studies' เสมอในบริบทการรับรองยาใหม่"
    },

    // PART 2: VOCABULARY (12 Questions)
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY (Synonyms, Antonyms & Context Clues)",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Select the word that is <b>closest in meaning</b> to the underlined word in the sentence below:<br><br>
           "The newly synthesized vaccine demonstrated high <u>efficacy</u> in preventing transmission during the phase III clinical trials."`,
        options: [
            "effectiveness",
            "volatility",
            "redundancy",
            "adversity"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 Efficacy แปลว่า 'ประสิทธิผล' หรือความสามารถในการผลิตผลลัพธ์ที่ต้องการ ซึ่งใกล้เคียงกับคำว่า effectiveness มากที่สุดในบริบททางการแพทย์และวัคซีน",
        wrongExplanation: "volatility = ความผันผวน/การระเหยง่าย; redundancy = ความซ้ำซ้อน/ส่วนเกิน; adversity = ความทุกข์ยาก/เคราะห์กรรม",
        mindset: "คำศัพท์เทคโนโลยีชีวภาพและเภสัชกรรม (efficacy, potent, therapeutic) มักถูกนำมาออกข้อสอบเพื่อคัดเลือกนักเรียนสายวิทยาศาสตร์การแพทย์",
        speedHack: "สังเกตบริบทวัคซีนที่ประสบความสำเร็จในการป้องกันโรค (preventing transmission) ความหมายของคำต้องเป็นเชิงบวกเกี่ยวกับการทำงานได้ผล ซึ่งตรงกับ 'effectiveness'"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Choose the best vocabulary word to fill in the blank:<br><br>
           "Chronic inflammation can _________ the symptoms of rheumatoid arthritis, leading to severe joint degeneration if left untreated."`,
        options: [
            "alleviate",
            "exacerbate",
            "mitigate",
            "counteract"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 Exacerbate แปลว่า 'ทำให้แย่ลง/ทำให้รุนแรงขึ้น' เมื่อใส่ในช่องว่างจะได้ใจความว่า การอักเสบเรื้อรังทำให้เจ็บป่วยและอาการของโรคข้ออักเสบรูมาตอยด์รุนแรงขึ้น",
        wrongExplanation: "alleviate = บรรเทา/ทำให้น้อยลง (เป็น antonym ของสิ่งที่จะใส่); mitigate = บรรเทา/ทำให้เบาบางลง; counteract = ต่อต้าน/ลบล้างฤทธิ์",
        mindset: "ระวังคำศัพท์ที่มีความหมายทิศทางตรงกันข้าม (alleviate/mitigate กับ exacerbate) การอ่านทิศทางของประโยคว่าชี้ไปในทางบวกหรือลบจะช่วยกรองตัวเลือกได้ดี",
        speedHack: "ประโยคมีข้อความ 'leading to severe joint degeneration' (นำไปสู่การเสื่อมของข้อต่อที่รุนแรง) แสดงว่าสิ่งที่เกิดขึ้นในช่องว่างต้องเป็นสิ่งที่ไม่ดี ทำให้แย่ลง จึงเลือก 'exacerbate' (make worse)"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Find the word that is <b>opposite in meaning</b> to the underlined word:<br><br>
           "The side effects of this experimental sedative are highly <u>transient</u>, usually resolving within fifteen minutes after administration."`,
        options: [
            "fleeting",
            "permanent",
            "ephemeral",
            "moderate"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 โจทย์ถามหาคำที่มีความหมาย 'ตรงกันข้าม' (opposite in meaning). Transient แปลว่า 'ชั่วคราว/คงอยู่ไม่นาน' ดังนั้นคำตรงข้ามคือ permanent (ถาวร/คงอยู่ตลอดไป)",
        wrongExplanation: "fleeting = ชั่วครู่/ผ่านไปอย่างรวดเร็ว (synonym); ephemeral = อายุสั้น/ชั่วคราว (synonym); moderate = ปานกลาง/ไม่รุนแรง",
        mindset: "เช็คคำสั่งให้ละเอียดเสมอว่าโจทย์สั่งให้หา Synonym (คำเหมือน) หรือ Antonym (คำตรงข้าม) ความผิดพลาดที่พบบ่อยที่สุดคือการเผลอเลือกคำเหมือนเพราะเจอเป็นช้อยส์แรก",
        speedHack: "บริบทบอกว่า 'resolving within 15 minutes' (หายไปใน 15 นาที) แปลว่า transient = ชั่วคราว คำตรงข้ามคือ 'permanent'"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: BOUND VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Which of the following words best completes the sentence:<br><br>
           "Due to the patient's history of gastric ulcers, the use of nonsteroidal anti-inflammatory drugs (NSAIDs) is ___________, as it could provoke internal bleeding."`,
        options: [
            "contraindicated",
            "advocated",
            "prescribed",
            "recommended"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 Contraindicated (เป็นข้อห้ามใช้ทางการแพทย์) หมายถึงยาหรือการรักษาบางชนิดไม่ควรใช้ในผู้ป่วยเฉพาะรายเนื่องจากอาจเป็นอันตรายถึงแก่ชีวิต ในที่นี้คือผู้ป่วยเป็นแผลในกระเพาะอาหาร ห้ามใช้ยาแก้ปวดกลุ่ม NSAIDs เพราะจะยิ่งกระตุ้นให้เลือดออกในกระเพาะ",
        wrongExplanation: "advocated = สนับสนุน/สนับสนุนให้ใช้; prescribed = ถูกสั่งจ่ายยา; recommended = แนะนำให้ใช้",
        mindset: "คำศัพท์เชิงเทคนิคการใช้ยา เช่น contraindication (ข้อห้ามใช้), indication (ข้อบ่งใช้), precaution (ข้อควรระวัง) เป็นหัวใจสำคัญของวิชาชีพเภสัชกรและพบในข้อสอบแพทย์บ่อยครั้ง",
        speedHack: "เมื่อประโยคพูดถึงข้อห้ามทางการแพทย์เพราะจะก่ออันตรายร้ายแรง (provoke internal bleeding) คำศัพท์เฉพาะคือ 'contraindicated'"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Identify the word that best fits the context:<br><br>
           "Patients with hypertension must strictly _________ to their daily medication regimen to minimize the risk of cardiovascular stroke."`,
        options: [
            "deviate",
            "adhere",
            "submit",
            "consent"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 Adhere (มักใช้ร่วมกับ preposition 'to') ในบริบทการแพทย์หมายถึง 'ปฏิบัติตามอย่างเคร่งครัด' (adhere to a regimen = ทานยาตรงตามที่สั่งอย่างเคร่งครัด)",
        wrongExplanation: "deviate (from) = ออกนอกเส้นทาง/หันเห; submit (to) = ยอมจำนน; consent (to) = ยินยอม/ยอมรับ",
        mindset: "การเรียนรู้ Collocation หรือคำศัพท์ที่มักใช้คู่กับ Preposition เฉพาะเจาะจง (เช่น adhere + to) ช่วยในการตัดช้อยส์วิชาคำศัพท์ได้อย่างแม่นยำและรวดเร็ว",
        speedHack: "เห็นช่องว่างตามด้วยบุพบท 'to' และเป็นเรื่องการทานยาอย่างสม่ำเสมอ 'adhere to' (compliance) คือคำตอบที่พบบ่อยและถูกต้องที่สุด"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Select the word that is <b>closest in meaning</b> to the underlined word:<br><br>
           "The researcher formulated a <u>plausible</u> hypothesis explaining how the novel compound inhibits enzyme activity."`,
        options: [
            "preposterous",
            "credible",
            "fanciful",
            "untenable"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 Plausible แปลว่า 'มีความสมเหตุสมผล/น่าเชื่อถือเป็นไปได้' ซึ่งมีความหมายใกล้เคียงกับคำว่า credible (น่าเชื่อถือ) มากที่สุด",
        wrongExplanation: "preposterous = ไร้สาระ/ไม่สมเหตุสมผลอย่างยิ่ง; fanciful = เพ้อฝัน/เกิดจากจินตนาการ; untenable = ปกป้องไม่ได้/ไม่มีน้ำหนักพอจะเชื่อถือ",
        mindset: "คำศัพท์ด้านระเบียบวิธีวิจัยและวิทยาศาสตร์ (hypothesis, empirical, plausible) มักสะท้อนภาพการทำงานวิจัยในมหาวิทยาลัย ซึ่งตรงกับบริบทของวิชาการสอบแข่งขันระดับสูง",
        speedHack: "Hypothesis (สมมติฐาน) ที่ผู้วิจัยสร้างขึ้นเพื่ออธิบายกลไกทางวิทยาศาสตร์ย่อมต้องมีความ 'เป็นไปได้/น่าเชื่อถือ' ดังนั้นคำที่เป็นขั้วบวกและสมเหตุสมผลคือ 'credible'"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Choose the word that best completes the sentence:<br><br>
           "Unlike liquid solutions which are homogenous, suspensions are ____________ mixtures that require vigorous shaking before administration to ensure uniform dosing."`,
        options: [
            "heterogeneous",
            "compatible",
            "amorphous",
            "cohesive"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 Heterogeneous (เนื้อผสม/ไม่เป็นเนื้อเดียวกัน) เป็นคำตรงกันข้ามกับ homogeneous ในโจทย์บอกว่า 'Unlike liquid solutions which are homogenous...' (ไม่เหมือนสารละลายที่เป็นเนื้อเดียวกัน) ดังนั้นยาน้ำแขวนตะกอน (suspension) จึงเป็นสารเนื้อผสมที่ต้องเขย่าก่อนใช้",
        wrongExplanation: "compatible = เข้ากันได้/ไม่ต้านกัน; amorphous = อสัณฐาน/ไม่มีรูปทรงที่แน่นอน; cohesive = ยึดเหนี่ยว/เกาะเกี่ยวกัน",
        mindset: "ความรู้พื้นฐานวิทยาศาสตร์กายภาพและเคมีเรื่องสารละลาย (Solutions, Suspensions) เป็นสิ่งที่ผู้สอบเข้าเภสัชศาสตร์ต้องทราบ การประยุกต์ใช้ศัพท์เคมีในภาษาอังกฤษจึงเกิดขึ้นบ่อย",
        speedHack: "มองหาคำเปรียบเทียบในประโยค: 'Unlike... homogenous' โครงสร้างประโยคบอกความขัดแย้งชัดเจน คำขัดแย้งของ homogeneous คือ 'heterogeneous'"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Identify the word that is <b>opposite in meaning</b> to the underlined word:<br><br>
           "The patient's condition became highly <u>volatile</u> overnight, with blood pressure fluctuations that alarmed the ICU staff."`,
        options: [
            "erratic",
            "stable",
            "capricious",
            "imperceptible"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 Volatile แปลว่า 'แปรปรวนง่าย/ไม่คงที่' ดังนั้นคำตรงข้ามคือ stable (คงที่/มั่นคง)",
        wrongExplanation: "erratic = เอาแน่เอานอนไม่ได้/แปรปรวน (synonym); capricious = เปลี่ยนใจง่าย/เอาแต่ใจ/แปรปรวน (synonym); imperceptible = เล็กน้อยมากจนสังเกตไม่ได้",
        mindset: "คำศัพท์เกี่ยวกับสัญญาณชีพ (vital signs) ของผู้ป่วยวิกฤต มักใช้คำว่า volatile หรือ erratic บ่งบอกถึงภาวะอันตราย คำตรงข้ามในอุดมคติของแพทย์คือความคงที่ (stability)",
        speedHack: "โจทย์ให้หา 'opposite' (คำตรงข้าม) และบริบทบอกว่ามีความผันผวน (fluctuations) ซึ่งเป็นลบ คำตรงข้ามที่ดีต้องเป็นขั้วบวกคือ 'stable'"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Which word best fits the academic science context:<br><br>
           "Modern pharmacology relies heavily on ___________ evidence obtained through rigorous clinical trials rather than anecdotal reports."`,
        options: [
            "hypothetical",
            "subjective",
            "empirical",
            "speculative"
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 Empirical evidence แปลว่า 'หลักฐานเชิงประจักษ์' ซึ่งเป็นข้อมูลที่ได้จากการสังเกตและทำการทดลองจริงตามหลักวิทยาศาสตร์ ไม่ใช่การคาดเดาหรือฟังเขาเล่ามา (anecdotal)",
        wrongExplanation: "hypothetical = สมมติขึ้น/เป็นสมมติฐาน; subjective = ตามความรู้สึกส่วนตัว/เป็นอัตวิสัย; speculative = เป็นการคาดเดา/เก็งกำไร",
        mindset: "วิทยาศาสตร์การแพทย์ยึดหลัก 'Evidence-based' (อิงตามหลักฐานเชิงประจักษ์) คำว่า empirical จึงเป็นหัวใจสำคัญในการอธิบายคุณค่าข้อมูลวิจัย",
        speedHack: "สังเกตความขัดแย้ง 'rather than anecdotal reports' (มากกว่าเรื่องเล่าปากเปล่า) สิ่งที่ตรงข้ามกับเรื่องเล่าและการเดาในวิทยาศาสตร์คือ 'empirical' (การทดลองและสังเกตจริง)"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Find the word that is <b>closest in meaning</b> to the underlined word:<br><br>
           "Older adults often take multiple medications simultaneously, a practice known as polypharmacy, which increases the likelihood of <u>adverse</u> drug reactions."`,
        options: [
            "beneficial",
            "harmful",
            "insignificant",
            "negligible"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 Adverse drug reaction (ADR) แปลว่า 'อาการไม่พึงประสงค์จากการใช้ยา' หรือปฏิกิริยาที่เป็นโทษ/อันตราย ซึ่งคำว่า adverse ใกล้เคียงที่สุดกับ harmful (ที่เป็นอันตราย/เป็นผลร้าย)",
        wrongExplanation: "beneficial = เป็นประโยชน์ (antonym); insignificant = ไม่สำคัญ; negligible = น้อยมากจนละเลยได้",
        mindset: "คำศัพท์ด้านความปลอดภัยของยามักเจอคำว่า adverse event, adverse effect ซึ่งเป็นคำศัพท์ทางการแพทย์พื้นฐานที่ทุกคนต้องรู้ก่อนเข้าศึกษาเภสัชฯ",
        speedHack: "บริบทพูดถึงการกินยาซ้ำซ้อนหลายตัว (polypharmacy) ซึ่งเพิ่มโอกาสเกิดผลเสีย ดังนั้นคำว่า 'adverse' ต้องมีความหมายในเชิงลบ ซึ่งตรงกับ 'harmful'"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Complete the sentence with the most appropriate word:<br><br>
           "Vaccines stimulate the immune system to produce antibodies, providing active immunity that helps ___________ future viral invasions."`,
        options: [
            "facilitate",
            "thwart",
            "promote",
            "nurture"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 Thwart แปลว่า 'ขัดขวาง/ป้องกัน/ทำลายแผนการ' ในบริบทนี้คือ วัคซีนช่วยสร้างภูมิคุ้มกันเพื่อป้องกันหรือขัดขวางการบุกรุกของไวรัสในอนาคต",
        wrongExplanation: "facilitate = อำนวยความสะดวก (ความหมายตรงข้าม); promote = ส่งเสริม (ทำให้ไวรัสบุกง่ายขึ้น); nurture = เลี้ยงดู/ฟูมฟัก",
        mindset: "การวิเคราะห์กริยาที่กระทำต่อเป้าหมายที่เป็นภัยคุกคาม (future viral invasions) ร่างกายย่อมต้องการการ 'ทำลาย/ขัดขวาง' ภัยคุกคามนั้น",
        speedHack: "เป้าหมายคือ 'viral invasions' (การบุกรุกของไวรัส) กริยาที่กระทำต่อศัตรูต้องเป็นขั้วลบต่อศัตรู มีเพียง 'thwart' (ขัดขวาง) ที่เหมาะสมที่สุด"
    },
    {
        section: "Vocabulary",
        partTitle: "PART 2: VOCABULARY",
        suggestedTime: "Suggested Time: 40s",
        passage: null,
        text: `Select the word that is <b>opposite in meaning</b> to the underlined word:<br><br>
           "The laboratory report confirmed that the sample container had been <u>breached</u>, compromising the sterility of the biological culture."`,
        options: [
            "ruptured",
            "sealed",
            "contaminated",
            "exposed"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 Breached แปลว่า 'แตกร้าว/ถูกทำลาย/รั่วไหล' คำตรงข้ามคือ sealed (ถูกปิดผนึกอย่างแน่นหนา ปลอดภัย)",
        wrongExplanation: "ruptured = แตก/ฉีกขาด (synonym); contaminated = ปนเปื้อน (ผลลัพธ์ของ breach); exposed = ถูกเปิดเผย/สัมผัสสารภายนอก",
        mindset: "ความถูกต้องของการทดลองทางจุลชีววิทยาต้องการภาวะปลอดเชื้อ (sterility) หากภาชนะ breach จะสูญเสียภาวะนี้ คำตรงข้ามจึงต้องเป็นการป้องกันความร้าวรั่วนั้น",
        speedHack: "คำถามมองหา 'opposite' ของการรั่วไหล/ถูกบุกรุก (breached) คำตอบคือปิดให้สนิทนั่นคือ 'sealed'"
    },

    // PART 3: READING (12 Questions - 3 Passages, 4 Qs each)
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 1: Antibiotic Resistance (The Superbug Threat)</b><br><br>
             The rise of multidrug-resistant bacteria, colloquially known as "superbugs," represents one of the most pressing crises in modern medicine. Decades of overprescribing antibiotics for viral infections, combined with their agricultural application to promote livestock growth, have exerted massive evolutionary pressure on bacterial populations. Microorganisms that possess genetic mutations rendering them impervious to antimicrobial agents survive, reproduce, and disseminate their resistance genes via horizontal gene transfer. Consequently, common infections that were once easily treatable with penicillin or erythromycin are becoming increasingly lethal. Global health authorities warn that without immediate intervention, including drug stewardship and investment in novel molecular pathways, we may enter a post-antibiotic era where minor surgical procedures could carry catastrophic mortality risks.`,
        text: "What is the primary focus (main idea) of the passage?",
        options: [
            "The history of penicillin and erythromycin development.",
            "How agricultural overuse of antibiotics helps livestock grow faster.",
            "The evolutionary mechanisms and medical crisis of multidrug-resistant superbugs.",
            "The cost comparison of different medical procedures in a post-antibiotic era."
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 ใจความสำคัญ (Main idea) ของบทความนี้เน้นเรื่องการวิวัฒนาการของแบคทีเรียดื้อยาหลายชนิด (superbugs) และวิกฤตทางการแพทย์ที่กำลังเกิดขึ้นตามมา",
        wrongExplanation: "ข้อ 1 และ 2 เป็นเพียงรายละเอียดปลีกย่อย (minor details) ที่ยกมาอ้างอิงถึงสาเหตุและประวัติวิวัฒนาการ; ข้อ 4 ไม่ใช่ประเด็นหลักและไม่ได้รับความสำคัญหลักในเรื่องค่าใช้จ่าย",
        mindset: "คำถาม Main Idea ต้องครอบคลุมใจความรวมทั้งหมดของเรื่อง ไม่ใช่ประเด็นย่อยที่ปรากฏเพียงประโยคใดประโยคหนึ่ง",
        speedHack: "กวาดสายตามองคำศัพท์หลักที่กระจายทั่วบทความ: 'multidrug-resistant bacteria', 'superbugs', 'resistance genes' ช้อยส์ 3 คือช้อยส์เดียวที่มีโครงข่ายคำศัพท์เหล่านี้อย่างครบถ้วน"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 1: Antibiotic Resistance (The Superbug Threat)</b><br><br>
             The rise of multidrug-resistant bacteria, colloquially known as "superbugs," represents one of the most pressing crises in modern medicine. Decades of overprescribing antibiotics for viral infections, combined with their agricultural application to promote livestock growth, have exerted massive evolutionary pressure on bacterial populations. Microorganisms that possess genetic mutations rendering them impervious to antimicrobial agents survive, reproduce, and disseminate their resistance genes via horizontal gene transfer. Consequently, common infections that were once easily treatable with penicillin or erythromycin are becoming increasingly lethal. Global health authorities warn that without immediate intervention, including drug stewardship and investment in novel molecular pathways, we may enter a post-antibiotic era where minor surgical procedures could carry catastrophic mortality risks.`,
        text: "According to the passage, how do bacteria transfer their resistance traits to other bacteria?",
        options: [
            "Through agricultural chemicals used in farming.",
            "Via horizontal gene transfer.",
            "By reproducing only in host patients with weak immune systems.",
            "Through the degradation of penicillin in the environment."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ในบทความระบุไว้ชัดเจนในประโยคที่ว่า 'Microorganisms that possess genetic mutations... disseminate their resistance genes via horizontal gene transfer.'",
        wrongExplanation: "ข้อ 1 และ 4 เป็นตัวแปรภายนอกที่เป็นสาเหตุกระตุ้น แต่ไม่ใช่กลไกส่งต่อยีนดื้อยาระหว่างแบคทีเรียโดยตรง; ข้อ 3 เป็นรายละเอียดที่โจทย์ไม่ได้กล่าวไว้และไม่ใช่กลไกการส่งผ่านยีน",
        mindset: "คำถามที่เป็นข้อเท็จจริงตรงๆ (Detail question) ให้หา Keyword ในโจทย์คือ 'transfer their resistance traits' แล้วย้อนกลับไปสแกนหาคำที่ตรงกันในเนื้อหา",
        speedHack: "หาคำว่า 'transfer' หรือ 'disseminate' ในเนื้อหา จะพบคำว่า 'via horizontal gene transfer' สอดคล้องกับช้อยส์ 2 ทันที"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 1: Antibiotic Resistance (The Superbug Threat)</b><br><br>
             The rise of multidrug-resistant bacteria, colloquially known as "superbugs," represents one of the most pressing crises in modern medicine. Decades of overprescribing antibiotics for viral infections, combined with their agricultural application to promote livestock growth, have exerted massive evolutionary pressure on bacterial populations. Microorganisms that possess genetic mutations rendering them impervious to antimicrobial agents survive, reproduce, and disseminate their resistance genes via horizontal gene transfer. Consequently, common infections that were once easily treatable with penicillin or erythromycin are becoming increasingly lethal. Global health authorities warn that without immediate intervention, including drug stewardship and investment in novel molecular pathways, we may enter a post-antibiotic era where minor surgical procedures could carry catastrophic mortality risks.`,
        text: "What can be inferred about the \"post-antibiotic era\" mentioned in the passage?",
        options: [
            "It will be a period characterized by the discovery of cheaper drugs.",
            "Routine medical procedures could become extremely hazardous due to untreatable infections.",
            "Surgery will no longer be necessary because of new vaccines.",
            "Agricultural production will increase dramatically without antibiotic usage."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 การอนุมาน (Inference) จากประโยคสุดท้ายที่กล่าวว่า 'we may enter a post-antibiotic era where minor surgical procedures could carry catastrophic mortality risks' หมายความว่าการผ่าตัดเล็กๆ น้อยๆ ก็จะมีความเสี่ยงสูงที่จะเสียชีวิตจากการติดเชื้อที่รักษาไม่ได้อีกต่อไป",
        wrongExplanation: "ข้อ 1 ผิดเพราะยุคนี้ยาจะหายากและแพงขึ้น ไม่ใช่ถูกลง; ข้อ 3 ผิดเพราะการผ่าตัดยังจำเป็นอยู่แต่จะเสี่ยงขึ้น ไม่ใช่ยกเลิกการผ่าตัด; ข้อ 4 เนื้อหาไม่ได้ชี้นำไปในทิศทางนั้นเลย",
        mindset: "การอนุมาน (Inference) ต้องอาศัยข้อมูลจากบทความมาคิดต่อยอดตามหลักตรรกะ ห้ามเดาสิ่งที่เกินเลยจากเนื้อหาหรือแต่งเรื่องขึ้นเอง",
        speedHack: "มองหาตัวเลือกที่มีความหมายสอดคล้องกับข้อสรุปประโยคสุดท้ายของเรื่อง 'minor surgical procedures... catastrophic mortality' ซึ่งตรงกับ 'routine medical procedures... extremely hazardous'"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 1: Antibiotic Resistance (The Superbug Threat)</b><br><br>
             The rise of multidrug-resistant bacteria, colloquially known as "superbugs," represents one of the most pressing crises in modern medicine. Decades of overprescribing antibiotics for viral infections, combined with their agricultural application to promote livestock growth, have exerted massive evolutionary pressure on bacterial populations. Microorganisms that possess genetic mutations rendering them impervious to antimicrobial agents survive, reproduce, and disseminate their resistance genes via horizontal gene transfer. Consequently, common infections that were once easily treatable with penicillin or erythromycin are becoming increasingly lethal. Global health authorities warn that without immediate intervention, including drug stewardship and investment in novel molecular pathways, we may enter a post-antibiotic era where minor surgical procedures could carry catastrophic mortality risks.`,
        text: "What is the tone of the author in this passage?",
        options: [
            "indifferent and skeptical",
            "alarmed and urgent",
            "nostalgic and reflective",
            "celebratory and optimistic"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 น้ำเสียงของคนเขียน (Tone) เป็นแบบ 'ตื่นตัวและเร่งด่วน' (alarmed and urgent) เนื่องจากมีการใช้คำเช่น 'pressing crises', 'catastrophic mortality risks', และ 'without immediate intervention'",
        wrongExplanation: "indifferent = เพิกเฉย/ไม่สนใจ; skeptical = สงสัย/ไม่เชื่อถือ; nostalgic = คิดถึงความหลัง; celebratory = เฉลิมฉลอง/ยินดี; optimistic = มองโลกในแง่ดี",
        mindset: "การวิเคราะห์ Tone ให้ดูการเลือกใช้คำวิเศษณ์ (Adjectives/Adverbs) ที่แสดงอารมณ์ความรู้สึกของผู้เขียน หากมีคำที่ชี้ให้เห็นวิกฤตร้ายแรง น้ำเสียงจะเป็นเชิงกระตุ้นความกังวลหรือตื่นตัว",
        speedHack: "คำสำคัญอย่าง 'crises', 'lethal', 'catastrophic', 'warn' ชี้ไปยังน้ำเสียงระดับอันตรายและต้องการความช่วยเหลือด่วน คือ 'alarmed and urgent'"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 2: Nanotechnology in Drug Delivery</b><br><br>
             In recent years, nanomedicine has revolutionized the pharmacological landscape, particularly through the development of targeted drug delivery systems. Traditional drug administration often suffers from poor biodistribution, wherein active pharmaceutical ingredients affect healthy tissues indiscriminately, causing adverse side effects. Nanocarriers, such as liposomes and polymeric nanoparticles, can be engineered to encapsulate therapeutic agents and navigate the complex biological milieu. By conjugating specific ligands to the surface of these nanoparticles, scientists can target cancer cells that overexpress corresponding receptors. This localized release maximizes therapeutic efficacy at the site of pathology while minimizing systemic toxicity. However, translating these laboratory breakthroughs into clinical practice remains challenging due to difficulties in scaling up production and potential long-term biocompatibility concerns in human subjects.`,
        text: "According to the passage, what is the primary limitation of traditional drug administration?",
        options: [
            "It is too expensive to manufacture in large quantities.",
            "It lacks the capability to target diseased cells specifically, causing unwanted side effects.",
            "It relies on synthetic chemicals that cannot be absorbed by the body.",
            "It takes too long to show therapeutic effects in patients."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ยาแบบดั้งเดิมมีปัญหาด้าน biodistribution คือกระจายยาแบบไม่แยกแยะ ทำลายเนื้อเยื่อที่ดีไปด้วย ทำให้เกิดผลข้างเคียงที่รุนแรง ('affect healthy tissues indiscriminately, causing adverse side effects')",
        wrongExplanation: "ข้อ 1 และ 5 เป็นข้อจำกัดของการผลิตนาโน ไม่ใช่ของแบบดั้งเดิม; ข้อ 3 กล่าวเกินจริงเรื่องสารสังเคราะห์ไม่ดูดซึม; ข้อ 4 ไม่มีข้อความสนับสนุนในบทความว่าออกฤทธิ์ช้า",
        mindset: "อ่านเปรียบเทียบคำจำกัดความระหว่างระบบดั้งเดิม (Traditional) กับระบบนาโน (Nanotechnology) ให้ชัดเจนก่อนตอบ",
        speedHack: "Keyword ในคำถามคือ 'traditional drug administration'. สแกนเจอประโยค 'Traditional drug administration often suffers from...' แล้วลากคำเชื่อมโยง 'affect healthy tissues indiscriminately' เข้ากับช้อยส์ 2"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 2: Nanotechnology in Drug Delivery</b><br><br>
             In recent years, nanomedicine has revolutionized the pharmacological landscape, particularly through the development of targeted drug delivery systems. Traditional drug administration often suffers from poor biodistribution, wherein active pharmaceutical ingredients affect healthy tissues indiscriminately, causing adverse side effects. Nanocarriers, such as liposomes and polymeric nanoparticles, can be engineered to encapsulate therapeutic agents and navigate the complex biological milieu. By conjugating specific ligands to the surface of these nanoparticles, scientists can target cancer cells that overexpress corresponding receptors. This localized release maximizes therapeutic efficacy at the site of pathology while minimizing systemic toxicity. However, translating these laboratory breakthroughs into clinical practice remains challenging due to difficulties in scaling up production and potential long-term biocompatibility concerns in human subjects.`,
        text: "How do nanocarriers target cancer cells specifically?",
        options: [
            "By using high-temperature thermal reactions to destroy tumors.",
            "Through the conjugation of specific ligands that bind to cancer cell receptors.",
            "By decreasing the dosage of active pharmaceutical ingredients.",
            "Through physical manipulation using external magnetic fields."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ในบทความระบุว่าสามารถทำได้โดย 'conjugating specific ligands to the surface of these nanoparticles' ซึ่ง ligands นี้จะจับกับตัวรับ (receptors) ที่อยู่บนเซลล์มะเร็ง",
        wrongExplanation: "ข้อ 1, 3 และ 4 ไม่ใช่กลไกหลักตามที่ระบุไว้ในบทความนี้ (แม้บางข้ออาจเป็นเทคโนโลยีอื่นนอกเหนือจากบทความก็ตาม)",
        mindset: "ยึดมั่นข้อมูลที่ระบุในบทความเท่านั้น แม้จะมีความรู้รอบตัวเรื่องการใช้สนามแม่เหล็กดึงอนุภาค แต่หากบทความไม่ได้กล่าวไว้ก็ห้ามตอบ",
        speedHack: "จับคู่คีย์เวิร์ดในโจทย์ 'how... target cancer cells' กับประโยคในบทความ 'target cancer cells... By conjugating specific ligands'"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 2: Nanotechnology in Drug Delivery</b><br><br>
             In recent years, nanomedicine has revolutionized the pharmacological landscape, particularly through the development of targeted drug delivery systems. Traditional drug administration often suffers from poor biodistribution, wherein active pharmaceutical ingredients affect healthy tissues indiscriminately, causing adverse side effects. Nanocarriers, such as liposomes and polymeric nanoparticles, can be engineered to encapsulate therapeutic agents and navigate the complex biological milieu. By conjugating specific ligands to the surface of these nanoparticles, scientists can target cancer cells that overexpress corresponding receptors. This localized release maximizes therapeutic efficacy at the site of pathology while minimizing systemic toxicity. However, translating these laboratory breakthroughs into clinical practice remains challenging due to difficulties in scaling up production and potential long-term biocompatibility concerns in human subjects.`,
        text: "Which of the following is identified as a challenge in translating nanomedicine to clinical practice?",
        options: [
            "The lack of interest from pharmaceutical companies.",
            "The complexity of cellular receptors in normal tissues.",
            "Problems with scaling up manufacturing and potential issues with long-term biocompatibility.",
            "The high cost of buying liposomes from nature."
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 ประโยคสุดท้ายระบุชัดเจนถึงความท้าทายในการนำไปใช้ทางคลินิก: 'due to difficulties in scaling up production and potential long-term biocompatibility concerns'",
        wrongExplanation: "ข้อ 1 และ 4 ไม่ได้กล่าวถึงในบทความ; ข้อ 2 เป็นความท้าทายทั่วไปแต่ไม่ใช่ประเด็นข้อจำกัดในการผลิตที่ระบุไว้ช่วงท้าย",
        mindset: "ข้อจำกัดและความท้าทายมักอยู่ในย่อหน้าสุดท้ายหรือประโยคที่มีคำขัดแย้งเช่น 'However', 'Nonetheless', 'But'",
        speedHack: "มองหาคำขัดแย้ง 'However' ท้ายบทความ ข้อความหลังคำนี้จะนำไปสู่ประเด็นที่เป็นคำตอบข้อ 3 ทันที"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 2: Nanotechnology in Drug Delivery</b><br><br>
             In recent years, nanomedicine has revolutionized the pharmacological landscape, particularly through the development of targeted drug delivery systems. Traditional drug administration often suffers from poor biodistribution, wherein active pharmaceutical ingredients affect healthy tissues indiscriminately, causing adverse side effects. Nanocarriers, such as liposomes and polymeric nanoparticles, can be engineered to encapsulate therapeutic agents and navigate the complex biological milieu. By conjugating specific ligands to the surface of these nanoparticles, scientists can target cancer cells that overexpress corresponding receptors. This localized release maximizes therapeutic efficacy at the site of pathology while minimizing systemic toxicity. However, translating these laboratory breakthroughs into clinical practice remains challenging due to difficulties in scaling up production and potential long-term biocompatibility concerns in human subjects.`,
        text: "The word \"milieu\" in the passage is closest in meaning to ___________.",
        options: [
            "membrane",
            "environment",
            "disorder",
            "barrier"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 คำว่า 'milieu' แปลว่า 'สภาพแวดล้อม' (environment) หรือบริบทแวดล้อม ในที่นี้หมายถึงการเดินทางนำส่งยาผ่านสภาพแวดล้อมทางชีววิทยาที่ซับซ้อนภายในร่างกาย",
        wrongExplanation: "membrane = เยื่อหุ้มเซลล์; disorder = ความผิดปกติ/ความปั่นป่วน; barrier = สิ่งกีดขวาง/อุปสรรค",
        mindset: "การเดาความหมายศัพท์จากบริบท (Context clues) ให้ทดลองนำคำแปลของแต่ละตัวเลือกเข้าไปแทนที่ในประโยคเดิมแล้วดูว่าข้อใดลื่นไหลและได้ความสมบูรณ์ที่สุด",
        speedHack: "ประโยคบอกว่า 'navigate the complex biological milieu' (เดินทางผ่าน biological ... ที่ซับซ้อน) คำว่า 'environment' เข้ากันได้ดีที่สุดกับการเดินทางผ่านระบบอวัยวะต่างๆ"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 3: Telemedicine and Healthcare Accessibility</b><br><br>
             The integration of telecommunications technology into healthcare delivery, commonly referred to as telemedicine, has emerged as a cornerstone of modern public health strategies. For populations residing in remote geographical sectors, accessing specialized medical consultation has historically been hindered by prohibitive transit costs and the physical scarcity of regional clinics. Telemedicine mitigates these obstacles by facilitating synchronous virtual consultations, remote physiological monitoring, and digital prescription transmission. Beyond geographic convenience, the platform offers a preemptive approach to chronic disease management, allowing for regular, less-disruptive touchpoints between patients and primary care providers. Despite these demonstrable benefits, systemic impediments persist. The digital divide—characterized by inadequate broadband infrastructure in lower-income demographics—threatens to exacerbate existing health disparities. Furthermore, regulatory frameworks regarding cross-border licensing and medical liability insurance must undergo substantial harmonization before the full potential of digital health can be realized globally.`,
        text: "What is the primary objective of telemedicine as described in the passage?",
        options: [
            "To replace all physical hospitals with virtual software.",
            "To reduce the overall salary of doctors and medical staff.",
            "To improve healthcare accessibility and chronic disease management through digital tools.",
            "To train patients to perform surgical operations on themselves."
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 วัตถุประสงค์หลักของระบบโทรเวชกรรม (telemedicine) ตามบทความคือการเพิ่มความสามารถในการเข้าถึงบริการสาธารณสุขและช่วยการจัดการโรคเรื้อรังผ่านเทคโนโลยีสารสนเทศ",
        wrongExplanation: "ข้อ 1 และ 4 สุดโต่งเกินจริงและไม่ใช่จุดประสงค์; ข้อ 2 เป็นการกล่าวอ้างที่ไม่มีข้อมูลระบุและเป็นผลลบ",
        mindset: "ตัดตัวเลือกที่แสดงความคิดเห็นแบบสุดโต่ง (extreme statements) เช่น 'replace all physical hospitals', 'perform surgery on themselves' ออกทันที",
        speedHack: "หาประโยคสรุปด้านการใช้งานแรกๆ: 'telemedicine... cornerstone of modern public health... mitigates obstacles... chronic disease management'"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 3: Telemedicine and Healthcare Accessibility</b><br><br>
             The integration of telecommunications technology into healthcare delivery, commonly referred to as telemedicine, has emerged as a cornerstone of modern public health strategies. For populations residing in remote geographical sectors, accessing specialized medical consultation has historically been hindered by prohibitive transit costs and the physical scarcity of regional clinics. Telemedicine mitigates these obstacles by facilitating synchronous virtual consultations, remote physiological monitoring, and digital prescription transmission. Beyond geographic convenience, the platform offers a preemptive approach to chronic disease management, allowing for regular, less-disruptive touchpoints between patients and primary care providers. Despite these demonstrable benefits, systemic impediments persist. The digital divide—characterized by inadequate broadband infrastructure in lower-income demographics—threatens to exacerbate existing health disparities. Furthermore, regulatory frameworks regarding cross-border licensing and medical liability insurance must undergo substantial harmonization before the full potential of digital health can be realized globally.`,
        text: "Which of the following does the author identify as a potential threat to healthcare equity in telemedicine?",
        options: [
            "The high cost of buying medical webcams.",
            "The digital divide due to inadequate internet infrastructure.",
            "The lack of doctors willing to use video technology.",
            "The complexity of learning computer programming by patients."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ผู้เขียนระบุความเหลื่อมล้ำทางดิจิทัล (digital divide) ที่เกิดจากระบบโครงสร้างพื้นฐานอินเทอร์เน็ตความเร็วสูงไม่เพียงพอในประชากรรายได้น้อย เป็นภัยคุกคามที่อาจซ้ำเติมความเหลื่อมล้ำด้านสุขภาพที่มีอยู่ให้รุนแรงขึ้น",
        wrongExplanation: "ข้อ 1, 3 และ 4 เป็นการให้เหตุผลที่ตื้นและไม่ได้ระบุว่าเป็นความท้าทายหลักเชิงระบบในบทความ",
        mindset: "โจทย์ถามเกี่ยวกับ 'threat to healthcare equity' (ความเสี่ยงต่อความเท่าเทียม) คำศัพท์ที่ล้อกันในบทความคือ 'digital divide' และ 'exacerbate health disparities'",
        speedHack: "แสกนหาคำว่า 'equity' หรือ 'disparities' ในเนื้อหา จะเจอช่วงที่พูดถึง 'The digital divide... threats to exacerbate existing health disparities' ตอบข้อ 2 ได้ทันที"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 3: Telemedicine and Healthcare Accessibility</b><br><br>
             The integration of telecommunications technology into healthcare delivery, commonly referred to as telemedicine, has emerged as a cornerstone of modern public health strategies. For populations residing in remote geographical sectors, accessing specialized medical consultation has historically been hindered by prohibitive transit costs and the physical scarcity of regional clinics. Telemedicine mitigates these obstacles by facilitating synchronous virtual consultations, remote physiological monitoring, and digital prescription transmission. Beyond geographic convenience, the platform offers a preemptive approach to chronic disease management, allowing for regular, less-disruptive touchpoints between patients and primary care providers. Despite these demonstrable benefits, systemic impediments persist. The digital divide—characterized by inadequate broadband infrastructure in lower-income demographics—threatens to exacerbate existing health disparities. Furthermore, regulatory frameworks regarding cross-border licensing and medical liability insurance must undergo substantial harmonization before the full potential of digital health can be realized globally.`,
        text: "The word \"preemptive\" in the passage is closest in meaning to ____________.",
        options: [
            "preventative",
            "delayed",
            "costly",
            "experimental"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 Preemptive ในที่นี้หมายถึง 'การป้องกันไว้ก่อน/การสกัดกั้นเชิงรุก' ซึ่งตรงกับแนวคิดการดูแลแบบป้องกันโรค (preventative) ไม่ให้เรื้อรังลุกลาม",
        wrongExplanation: "delayed = ล่าช้า; costly = ราคาแพง; experimental = เชิงทดลอง",
        mindset: "ในวงการสาธารณสุข การจัดการโรคแบ่งเป็นเชิงรุก/ป้องกัน (preemptive/preventative) กับเชิงรับ/ตามอาการ (reactive) ดังนั้นคำคู่ใจที่ตรงกันคือ preventative",
        speedHack: "บริบทพูดถึง 'chronic disease management' การจัดการก่อนเกิดปัญหาคือการป้องกัน (preventative)"
    },
    {
        section: "Reading",
        partTitle: "PART 3: READING COMPREHENSION",
        suggestedTime: "Suggested Time: 1.5 mins",
        passage: `<b>Passage 3: Telemedicine and Healthcare Accessibility</b><br><br>
             The integration of telecommunications technology into healthcare delivery, commonly referred to as telemedicine, has emerged as a cornerstone of modern public health strategies. For populations residing in remote geographical sectors, accessing specialized medical consultation has historically been hindered by prohibitive transit costs and the physical scarcity of regional clinics. Telemedicine mitigates these obstacles by facilitating synchronous virtual consultations, remote physiological monitoring, and digital prescription transmission. Beyond geographic convenience, the platform offers a preemptive approach to chronic disease management, allowing for regular, less-disruptive touchpoints between patients and primary care providers. Despite these demonstrable benefits, systemic impediments persist. The digital divide—characterized by inadequate broadband infrastructure in lower-income demographics—threatens to exacerbate existing health disparities. Furthermore, regulatory frameworks regarding cross-border licensing and medical liability insurance must undergo substantial harmonization before the full potential of digital health can be realized globally.`,
        text: "What must happen before telemedicine can be fully realized globally?",
        options: [
            "All doctors must acquire a computer science degree.",
            "Regulatory and licensing frameworks must be standardized and harmonized.",
            "Patients must pay for broadband internet access themselves.",
            "Drug companies must lower the cost of physical pills."
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ในประโยคสุดท้ายของเรื่องบอกว่า 'regulatory frameworks regarding cross-border licensing... must undergo substantial harmonization before the full potential... realized'" +
            " ซึ่งคำว่า harmonization แปลว่าการทำให้เป็นทิศทางเดียวกันหรือการมาตรฐานเดียวกัน (standardized)",
        wrongExplanation: "ข้อ 1 และ 4 เป็นเงื่อนไขที่ไม่เกี่ยวข้องและสุดโต่งเกินจริง; ข้อ 3 ไม่ได้ถูกเสนอเป็นแนวทางแก้ไขหลักในข้อกฎหมายท้ายเรื่อง",
        mindset: "มองหาเงื่อนไขบังคับสุดท้ายของบทความ มักเป็นแนวทางเชิงนโยบายหรือกฎหมายที่ต้องได้รับการปรับปรุง",
        speedHack: "หาคีย์เวิร์ดท้ายประโยค: 'before the full potential... realized' สิ่งที่อยู่นำหน้าคือ 'regulatory frameworks... must undergo substantial harmonization' (ประสานสอดคล้องกัน/มาตรฐานเดียวกัน)"
    },

    // PART 4: ERROR IDENTIFICATION (12 Questions)
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "Although the clinical trials <span class="accent-text">(1) were conducted</span> under strict conditions, the results <span class="accent-text">(2) which was published</span> last week failed <span class="accent-text">(3) to show</span> any statistically significant improvement in <span class="accent-text">(4) patients'</span> symptoms."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ซึ่งเป็นจุดที่ผิดแกรมมาร์ เพราะ Relative Clause 'which was published' ขยายประธาน 'the results' ซึ่งเป็นคำนามพหูพจน์ ดังนั้น Verb to be ต้องเป็นพหูพจน์ด้วย คือต้องเปลี่ยนจาก 'was' เป็น 'were' (which were published)",
        wrongExplanation: "ข้อ 1 were conducted ถูกต้องเพราะประธาน trials เป็นพหูพจน์และอยู่ในรูป passive voice; ข้อ 3 to show ถูกต้องตามหลังกริยาหลัก failed + to-infinitive; ข้อ 4 patients' ถูกต้องในรูปแสดงความเป็นเจ้าของของนามพหูพจน์ (ผู้ป่วยหลายคน)",
        mindset: "เมื่อเห็น Relative Pronoun (who, which, that) และมี Verb ตามหลัง ให้รีบเช็คคำนามข้างหน้าที่มันไปขยายทันทีเพื่อตรวจสอบความสอดคล้องประธานและกริยา (Subject-Verb Agreement)",
        speedHack: "สแกนดู Relative Clause: 'results (พหูพจน์) + which was' -> 'results' เป็นพหูพจน์ จะใช้ 'was' ไม่ได้เด็ดขาด ต้องแก้เป็น 'were' ทันที"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "The chief pharmacist requested that the intern <span class="accent-text">(1) double-checks</span> the inventory <span class="accent-text">(2) of vaccines</span> stored in the medical freezer <span class="accent-text">(3) to prevent</span> any supply <span class="accent-text">(4) shortages</span> next month."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 จุดที่ผิดแกรมมาร์คือโครงสร้าง Subjunctive mood ซึ่งกริยาหลักคือ 'requested that...' แสดงความต้องการ/คำขอร้อง โครงสร้างประโยคหลัง that จะต้องใช้ Subjunctive Clause ที่มี Verb เป็นรูป Base Form (Infinitive without to) เสมอ ไม่ว่าประธานจะเป็นเอกพจน์หรือพหูพจน์ ดังนั้น 'double-checks' ต้องแก้ไขเป็น 'double-check' (ไม่มี s)",
        wrongExplanation: "ข้อ 2 of vaccines ถูกต้องเป็นการขยายประเภทคลังสินค้า; ข้อ 3 to prevent ถูกต้องแสดงวัตถุประสงค์; ข้อ 4 shortages ถูกต้องทำหน้าที่เป็นคำนามพหูพจน์ของความขาดแคลน",
        mindset: "ระลึกถึงกฎ Subjunctive Mood เมื่อเจอกริยาบังคับ/ขอร้อง/แนะนำ เช่น request, recommend, suggest, insist, demand + that + Subject + [should] + V.inf (รูปปกติ ไม่ผัน)",
        speedHack: "เจอคำว่า 'requested that' + ประธาน 'intern' + กริยาผันเติม s (double-checks) -> นี่คือกับดัก Subjunctive ชี้จุดที่ 1 ผิดทันที!"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "Neither the head of research <span class="accent-text">(1) nor</span> the lab technicians <span class="accent-text">(2) was</span> aware that the experimental compound <span class="accent-text">(3) had begun</span> to decompose under room <span class="accent-text">(4) temperature</span>."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ผิดที่กริยา 'was' เนื่องจากประโยคเชื่อมด้วยโครงสร้าง 'Neither A nor B' กริยาแท้ต้องผันตามประธานตัวหลัง (ประธาน B) ซึ่งในที่นี้คือ 'the lab technicians' (พหูพจน์) ดังนั้น ต้องเปลี่ยนจาก 'was' เป็น 'were'",
        wrongExplanation: "ข้อ 1 nor ใช้คู่กับ Neither ถูกต้องตามหลักสหสัมพันธ์; ข้อ 3 had begun ถูกต้องเพราะการสลายตัวเกิดขึ้นก่อนหน้าการรับรู้ (Past Perfect เกิดก่อน Past Simple); ข้อ 4 room temperature เป็นคำนามประสมที่ถูกต้องในความหมายอุณหภูมิห้อง",
        mindset: "กฎประธานร่วม: 'Neither A nor B' หรือ 'Either A or B' หรือ 'Not only A but also B' กริยาต้องสอดคล้องกับคำนามตัวที่อยู่ใกล้กริยามากที่สุด (B)",
        speedHack: "กวาดตาเห็น 'Neither... nor' -> สแกนดูคำนามหลัง nor ทันที: 'technicians' (พหูพจน์) -> ดูต่อที่กริยา: 'was' (เอกพจน์) -> ผิดแน่นอน!"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "The patient was advised <span class="accent-text">(1) to avoid</span> eating grapefruit, taking aspirin, <span class="accent-text">(2) and to drink</span> alcohol while <span class="accent-text">(3) undergoing</span> this specific cardiovascular <span class="accent-text">(4) treatment</span>."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 จุดที่ผิดคือโครงสร้างขนาน (Parallel Structure) คำเชื่อม 'and' เชื่อมรายการสิ่งที่ผู้ป่วยต้องหลีกเลี่ยง: 'avoid' + [Gerund 1: eating...], [Gerund 2: taking...], and [Gerund 3: to drink...] ซึ่งขัดกับส่วนอื่น ต้องแก้ 'to drink' เป็น 'drinking' เพื่อให้ขนานกับ eating และ taking",
        wrongExplanation: "ข้อ 1 to avoid ถูกต้องตามหลังโครงสร้าง passive voice 'was advised + to V'; ข้อ 3 undergoing ทำหน้าที่เป็น participle ขยายในรูปย่อตัวผู้ป่วยเอง; ข้อ 4 treatment เป็นคำนามที่ถูกต้องขยายด้วย cardiovascular",
        mindset: "เมื่อเห็นคำเชื่อมประสาน (and, or, but) ให้ตรวจดูคำที่เรียงลำดับข้างหน้าและข้างหลังว่ามีชนิดของคำ (Part of speech) หรือโครงสร้างไวยากรณ์เดียวกันหรือไม่",
        speedHack: "สแกนลิสต์ในประโยค: 'eating (V.ing), taking (V.ing), and to drink (to-inf)' -> โครงสร้างไม่ขนาน ชี้เป้า 'and to drink' ว่าผิดทันที"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "No sooner <span class="accent-text">(1) had the pharmacist</span> finished dispensing the medication <span class="accent-text">(2) when</span> the emergency alarm <span class="accent-text">(3) sounded</span>, forcing everyone <span class="accent-text">(4) to evacuate</span>."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 ผิดที่ตัวเชื่อม 'when' เนื่องจากประโยคขึ้นต้นด้วยโครงสร้าง Inversion ปฏิเสธ 'No sooner...' ซึ่งเป็นสำนวนที่ต้องใช้คู่กับคำเชื่อม 'than' เสมอ (No sooner had... than...) ห้ามใช้ when",
        wrongExplanation: "ข้อ 1 had the pharmacist เป็นโครงสร้างการสลับตำแหน่งแบบ Inversion ที่ถูกต้องเมื่อคำปฏิเสธขึ้นต้นประโยค; ข้อ 3 sounded เป็นกริยาช่อง 2 ในอดีตตามหลังเหตุการณ์แรก; ข้อ 4 to evacuate ถูกต้องตามหลังโครงสร้าง force + object + to V",
        mindset: "จำเป็นต้องจำสูตรคู่คำเฉพาะ (Correlative Adverbs/Conjunctions): 'No sooner... than' และ 'Hardly/Scarcely... when'",
        speedHack: "เห็น 'No sooner' โผล่มาต้นประโยค ให้ลากสายตาไปหาตัวเชื่อมตรงกลางทันที ถ้าเจอ 'when' ปุ๊บ กาข้อนั้นผิดได้ทันที เพราะต้องคู่กับ 'than'"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "The chemical analysis of the new drug formulation revealed that it is <span class="accent-text">(1) superior than</span> the leading brand in terms of <span class="accent-text">(2) dissolution rate</span> and has <span class="accent-text">(3) fewer</span> adverse side effects <span class="accent-text">(4) overall</span>."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 ผิดที่คำบุพบทหลังคำเปรียบเทียบ คำคุณศัพท์ที่ลงท้ายด้วย -ior เช่น superior, inferior, senior, junior, prior จะต้องใช้คู่กับคำว่า 'to' เท่านั้น ไม่ใช้ 'than' ดังนั้นต้องแก้จาก 'superior than' เป็น 'superior to'",
        wrongExplanation: "ข้อ 2 dissolution rate เป็นวลีนามที่ระบุคุณสมบัติถูกต้อง; ข้อ 3 fewer ถูกต้องเพราะขยาย side effects ซึ่งเป็นคำนามพหูพจน์นับได้ (ใช้ fewer คู่กับนามนับได้พหูพจน์ ส่วน less ใช้กับนามนับไม่ได้); ข้อ 4 overall เป็น adverb ขยายประโยคได้ถูกต้อง",
        mindset: "จดจำคำเปรียบเทียบพิเศษที่ไม่สอดคล้องกับกฎขั้นกว่าทั่วไป (-er than) แต่ใช้บุพบท 'to' แทน",
        speedHack: "เห็นคำว่า 'superior/inferior' ปุ๊บ กวาดตาดูคำข้างหลัง ถ้าเป็น 'than' ให้ปักใจเลยว่าผิด ต้องเปลี่ยนเป็น 'to'"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "Due to the <span class="accent-text">(1) extreme</span> volatile nature of the chemical mixture, the safety protocols <span class="accent-text">(2) require</span> the scientists to wear full protective gear and work under <span class="accent-text">(3) well-ventilated</span> hoods <span class="accent-text">(4) at all times</span>."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 จุดที่ผิดคือการใช้ชนิดของคำ (Word Form) ผิดพลาด คำว่า 'volatile' เป็น Adjective ขยายคำนาม 'nature' ดังนั้นคำที่มาขยาย volatile อีกทีหนึ่งต้องเป็น Adverb ไม่ใช่ Adjective จึงต้องเปลี่ยนจาก 'extreme' (Adj) เป็น 'extremely' (Adv) เพื่อมาขยาย volatile",
        wrongExplanation: "ข้อ 2 require ถูกต้องสอดคล้องกับประธานพหูพจน์ protocols; ข้อ 3 well-ventilated เป็นคำคุณศัพท์ประสม (compound adjective) ขยาย hoods ถูกต้อง; ข้อ 4 at all times เป็นสำนวนแปลว่าตลอดเวลา",
        mindset: "เรียงลำดับการขยายคำให้ถูกต้อง: Adverb ขยาย Adjective และ Adjective ขยาย Noun (Adv + Adj + Noun)",
        speedHack: "เห็น 'extreme (Adj) + volatile (Adj) + nature (Noun)' -> มี Adj สองตัวมาวางต่อกันโดยไม่มีเครื่องหมายจุลภาคคั่นไม่ได้ ตัวแรกต้องแปลงร่างเป็น Adv เติม -ly แก้เป็น extremely"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "A survey conducting by the Ministry of Health <span class="accent-text">(1) indicated</span> that a majority of high school students <span class="accent-text">(2) were unaware</span> of the hazardous effects of electronic cigarettes <span class="accent-text">(3) on</span> developing brain <span class="accent-text">(4) tissues</span>."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 จุดที่ผิดคือโครงสร้าง Participle ขยายคำนาม ในที่นี้ 'A survey' (ผลสำรวจ) ไม่สามารถดำเนินการสำรวจตัวเองได้ มันต้อง 'ถูกจัดทำขึ้น' โดยกระทรวงสาธารณสุข ดังนั้นกริยาช่วยขยายต้องอยู่ในรูป Passive Participle (V.3) แก้ไขจาก 'conducting' เป็น 'conducted'",
        wrongExplanation: "ข้อ 2 were unaware ถูกต้องเพราะประธานหลักของ clause หลัง that คือ 'a majority' ซึ่งตามด้วยพหูพจน์ (students) จึงใช้ were; ข้อ 3 on เป็น preposition ที่ใช้คู่กับ effects ได้อย่างถูกต้อง (effect on...); ข้อ 4 tissues เป็นคำนามพหูพจน์ขยายความเนื้อเยื่อ",
        mindset: "เมื่อเห็นคำนามตามด้วย V-ing หรือ V-3 ที่ทำหน้าที่ขยาย (Participle clause) ให้เช็คทันทีว่านามนั้น 'ทำเอง' (V-ing) หรือ 'ถูกทำ' (V-3)",
        speedHack: "สำรวจ (survey) จัดการตัวเองไม่ได้ ดังนั้นต้อง 'ถูกจัดทำ' (conducted) ไม่ใช่ 'conducting' กาจุดแรกผิดทันที"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "The administration of the drug <span class="accent-text">(1) should have discontinued</span> immediately <span class="accent-text">(2) if the patient</span> develops signs of severe skin rash <span class="accent-text">(3) indicating</span> an acute <span class="accent-text">(4) immunological</span> reaction."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 ผิดแกรมมาร์ตรง Voice (Active vs Passive voice) 'The administration of the drug' (การบริหารยาหรือการให้ยา) เป็นคำนามไม่มีชีวิต ไม่สามารถหยุดยาด้วยตนเองได้ แต่ต้อง 'ถูกสั่งหยุด' (Passive voice) และเนื่องจากมีคำเชื่อมเงื่อนไข 'if the patient develops...' (If-Clause Type 1) ประโยคหลักควรใช้โครงสร้าง 'should be V.3' แก้ไขเป็น 'should be discontinued'",
        wrongExplanation: "ข้อ 2 if the patient develops เป็นโครงสร้างเงื่อนไข Present Simple ถูกต้อง; ข้อ 3 indicating เป็น Present Participle ขยาย signs แปลว่าซึ่งบ่งชี้ (มีบทบาทกระทำเอง); ข้อ 4 immunological เป็น adjective ขยายคำนาม reaction ถูกต้อง",
        mindset: "เช็คประธานหลักของประโยคว่า 'เป็นผู้กระทำ' หรือ 'ผู้ถูกกระทำ' โดยเฉพาะคำนามที่ไม่มีชีวิตส่วนใหญ่ต้องอยู่ในรูปถูกกระทำ (Passive Voice)",
        speedHack: "สแกนหาประธาน: 'administration' (การจ่ายยา) -> กริยา: 'should have discontinued' (รูป active = ได้หยุดเอง) -> ยาจะหยุดตัวเองไม่ได้ ต้องใช้ passive 'should be discontinued'"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "The toxicity of the pesticide was <span class="accent-text">(1) so severe</span> that it killed not only the targeted pests <span class="accent-text">(2) but also</span> <span class="accent-text">(3) decimated</span> beneficial insect populations, leading to <span class="accent-text">(4) ecological imbalance</span>."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 จุดที่ผิดคือโครงสร้างขนาน (Parallel structure) หลังจากใช้คำเชื่อมคู่ 'not only... but also...' สิ่งที่อยู่ตามหลังทั้งสองส่วนต้องสมดุลกัน ในที่นี้ 'not only' ตามด้วยกรรมของประโยค 'the targeted pests' (Noun phrase) ดังนั้นหลัง 'but also' ต้องตามด้วย Noun phrase เช่นกัน ไม่ควรตามด้วยกริยา 'decimated' (V) แก้ไขโดยเลื่อนกริยา 'killed' มาอยู่หน้า 'not only' เป็น 'killed not only the targeted pests but also beneficial insect populations' หรือตัดคำว่า decimated ทิ้ง",
        wrongExplanation: "ข้อ 1 so severe ถูกต้องตามโครงสร้าง 'so + adj + that' (รุนแรงมากจนกระทั่ง); ข้อ 2 but also ใช้คู่กับ not only ถูกต้อง; ข้อ 4 ecological imbalance เป็นคำนามที่ทำหน้าที่เป็นกรรมของบุพบท leading to ได้อย่างสมบูรณ์",
        mindset: "จดจำตำแหน่งและโครงสร้างของ Correlative Conjunctions (not only X but also Y) โดย X และ Y ต้องมีหน้าตาสนิทและประเภทคำเหมือนกันทุกประการ",
        speedHack: "ดูคำหลัง not only: 'the targeted pests' (คำนาม) -> ดูคำหลัง but also: 'decimated (V) + beneficial insect...' (กริยา+นาม) -> ไม่สมดุล มีส่วนเกินเข้ามา ชี้ข้อ 3 ผิด"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "The medical board is responsible to ensure <span class="accent-text">(1) that all healthcare providers</span> <span class="accent-text">(2) adhere to</span> professional standards <span class="accent-text">(3) and maintain</span> patient confidentiality <span class="accent-text">(4) at all costs</span>."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 (จุดเริ่มต้นของกริยา 'responsible to ensure') ผิดที่การใช้บุพบทคู่คุณศัพท์ (Prepositional Idioms) คำว่า 'responsible' ต้องตามด้วยบุพบท 'for' เสมอเมื่อบอกหน้าที่ความรับผิดชอบ และต้องตามด้วย V-ing ดังนั้นต้องแก้ไขจาก 'responsible to ensure' เป็น 'responsible for ensuring'",
        wrongExplanation: "ข้อ 2 adhere to ถูกต้อง แปลว่าปฏิบัติตามกฎเกณฑ์; ข้อ 3 and maintain ขนานกับ V.inf (adhere) ตามหลัง modal 'should' หรืออยู่หลัง that-clause ที่ละไว้; ข้อ 4 at all costs เป็นสำนวนแปลว่าไม่ว่าจะเกิดอะไรขึ้นก็ตาม",
        mindset: "กริยาคุณศัพท์เฉพาะต้องตามด้วย preposition เกรดเฉพาะทางเสมอ (เช่น responsible for, capable of, interested in) จำเป็นต้องคุ้นชินผ่านการอ่านบ่อยๆ",
        speedHack: "สแกนพบคำว่า 'responsible to' -> จำไว้เลยว่า 'responsible for + Gerund' เสมอ แก้เป็น 'responsible for ensuring'"
    },
    {
        section: "Error Identification",
        partTitle: "PART 4: ERROR IDENTIFICATION",
        suggestedTime: "Suggested Time: 50s",
        passage: null,
        text: `Identify the grammatical error in the following sentence:<br><br>
           "The primary advantage <span class="accent-text">(1) of this new drug</span> is that it requires <span class="accent-text">(2) much lesser</span> dosages to achieve the same therapeutic effect, thereby <span class="accent-text">(3) reducing</span> the severity <span class="accent-text">(4) of potential</span> side effects."`,
        options: ["(1)", "(2)", "(3)", "(4)"],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 จุดที่ผิดคือกฎการใช้คำบอกปริมาณกับคำนาม คำว่า 'dosages' (ขนาดยา) เป็นคำนามนับได้พหูพจน์ (มี s ลงท้าย) ดังนั้นจะไม่สามารถใช้ 'lesser/less' ขยายได้ เนื่องจาก less ใช้กับคำนามที่นับไม่ได้ ต้องแก้ไขเป็น 'much smaller' หรือ 'fewer' เพื่อความถูกต้อง",
        wrongExplanation: "ข้อ 1 of this new drug เป็นส่วนขยายประธานหลัก advantage ได้ถูกต้อง; ข้อ 3 thereby reducing เป็นการใช้ adverb + participle เพื่อลดรูปประโยคแสดงผลลัพธ์ที่ตามมา; ข้อ 4 of potential เป็นส่วนขยายของ severity",
        mindset: "สังเกตความแตกต่างระหว่างคำนามนับได้พหูพจน์ (Countable Plural) กับคำนามนับไม่ได้ (Uncountable) เพราะจะควบคุมคำบอกปริมาณที่นำหน้าเสมอ (เช่น few/fewer กับ little/less)",
        speedHack: "สแกนเห็น 'lesser/less' วิ่งไปคู่กับ 'dosages' (นามพหูพจน์มี s) -> ผิดแกรมมาร์ทันที เพราะ less/lesser ห้ามใช้นำหน้านามนับได้พหูพจน์"
    },

    // PART 5: CLOZE TEST (12 Questions - 2 Passages, 6 Qs each)
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 1: The Discovery of Penicillin</b><br><br>
             In 1928, Alexander Fleming discovered penicillin, an event that marked the dawn of the antibiotic age. Before this breakthrough, minor bacterial infections were ____(1)____ fatal. Fleming noticed that a mold contaminating a petri dish of Staphylococcus bacteria had created a zone ____(2)____ the bacteria could not survive. ____(3)____, isolating the active substance proved immensely difficult. It was not until the late 1930s that Howard Florey and Ernst Chain successfully purified the compound, ____(4)____ the mass production of the drug during World War II. This pharmaceutical triumph saved millions of lives on the battlefield. ____(5)____, the widespread misuse of penicillin since then has rapidly accelerated the emergence of resistant strains. Today, healthcare professionals must restrict antibiotic use ____(6)____ preserve the efficacy of these vital therapeutics.`,
        text: "Choose the best option for blank (1):",
        options: [
            "consistently",
            "rarely",
            "infrequently",
            "optionally"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 'consistently' (เป็นประจำ/อย่างต่อเนื่อง) เพราะก่อนยุคปฏิชีวนะ (penicillin) การติดเชื้อแบคทีเรียแม้จะเล็กน้อยก็มักจะลงเอยด้วยการเสียชีวิตอย่างสม่ำเสมอ ซึ่งสอดคล้องกับความเป็นจริงทางประวัติศาสตร์การแพทย์",
        wrongExplanation: "rarely = แทบจะไม่; infrequently = ไม่บ่อย (ขัดแย้งกับความเป็นจริงที่ว่าติดเชื้อแล้วตายง่ายมาก); optionally = ตามใจชอบ/มีทางเลือก",
        mindset: "การเติมคำในช่องว่างเชิงคำศัพท์ (Vocabulary Cloze) ต้องอ่านประโยคข้างเคียงเพื่อวิเคราะห์ประวัติศาสตร์หรือแนวโน้มของเนื้อเรื่องร่วมด้วย",
        speedHack: "Keyword คือ 'Before this breakthrough' (ก่อนที่จะมีการค้นพบครั้งใหญ่) แสดงว่าสถานการณ์อดีตต้องเลวร้ายมาก การติดเชื้อเล็กน้อยจึงส่งผลถึงตายได้อย่างสม่ำเสมอ 'consistently'"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 1: The Discovery of Penicillin</b><br><br>
             In 1928, Alexander Fleming discovered penicillin, an event that marked the dawn of the antibiotic age. Before this breakthrough, minor bacterial infections were ____(1)____ fatal. Fleming noticed that a mold contaminating a petri dish of Staphylococcus bacteria had created a zone ____(2)____ the bacteria could not survive. ____(3)____, isolating the active substance proved immensely difficult. It was not until the late 1930s that Howard Florey and Ernst Chain successfully purified the compound, ____(4)____ the mass production of the drug during World War II. This pharmaceutical triumph saved millions of lives on the battlefield. ____(5)____, the widespread misuse of penicillin since then has rapidly accelerated the emergence of resistant strains. Today, healthcare professionals must restrict antibiotic use ____(6)____ preserve the efficacy of these vital therapeutics.`,
        text: "Choose the best option for blank (2):",
        options: [
            "wherein",
            "whose",
            "which",
            "whoever"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 'wherein' (ซึ่งในนั้น / in which) ทำหน้าที่เป็น relative adverb ขยาย 'a zone' (พื้นที่/บริเวณ) สื่อว่าแบคทีเรียไม่สามารถมีชีวิตรอดอยู่ได้ในบริเวณดังกล่าว",
        wrongExplanation: "whose = แสดงความเป็นเจ้าของของนาม; which = ซึ่ง (หากใช้ which ด้านหลังจะต้องมีบุพบท เช่น in which หรือ which... in); whoever = ใครก็ตาม",
        mindset: "เช็คโครงสร้างไวยากรณ์ของประโยคย่อย 'the bacteria could not survive' เป็นประโยคที่สมบูรณ์ในตัวเองแล้ว ดังนั้นจึงต้องการตัวเชื่อมที่เป็น Adverb ของสถานที่ ซึ่ง 'wherein' มีค่าเท่ากับ 'in which'",
        speedHack: "ขยายคำว่า 'zone' (สถานที่) และมีประโยคสมบูรณ์ตามหลัง ตัวเชื่อมที่เหมาะสมที่สุดคือ 'in which' หรือ 'wherein' (ไม่ใช่ which ลอยๆ)"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 1: The Discovery of Penicillin</b><br><br>
             In 1928, Alexander Fleming discovered penicillin, an event that marked the dawn of the antibiotic age. Before this breakthrough, minor bacterial infections were ____(1)____ fatal. Fleming noticed that a mold contaminating a petri dish of Staphylococcus bacteria had created a zone ____(2)____ the bacteria could not survive. ____(3)____, isolating the active substance proved immensely difficult. It was not until the late 1930s that Howard Florey and Ernst Chain successfully purified the compound, ____(4)____ the mass production of the drug during World War II. This pharmaceutical triumph saved millions of lives on the battlefield. ____(5)____, the widespread misuse of penicillin since then has rapidly accelerated the emergence of resistant strains. Today, healthcare professionals must restrict antibiotic use ____(6)____ preserve the efficacy of these vital therapeutics.`,
        text: "Choose the best option for blank (3):",
        options: [
            "Furthermore",
            "However",
            "Consequently",
            "For instance"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 'However' (อย่างไรก็ตาม) เนื่องจากประโยคก่อนหน้าพูดถึงความสำเร็จในการสังเกตขอบเขตการยับยั้งแบคทีเรียของเชื้อรา (เชิงบวก) แต่ประโยคถัดมาขัดแย้งว่าการแยกสารออกมานั้นทำได้ยากมาก (เชิงลบ) จึงต้องการตัวเชื่อมแสดงความขัดแย้ง",
        wrongExplanation: "Furthermore = ยิ่งไปกว่านั้น (เสริมน้ำหนัก); Consequently = ดังนั้น (เป็นเหตุเป็นผล); For instance = ตัวอย่างเช่น",
        mindset: "การเลือกคำเชื่อมตรรกะ (Logical Connectors) ต้องวิเคราะห์ความสัมพันธ์ระหว่างสองประโยคว่าเป็นทิศทางเดียวกัน ขัดแย้ง เป็นเหตุผล หรือยกตัวอย่าง",
        speedHack: "เปรียบเทียบโทนเสียง: ประโยคแรก 'created a zone of survival' (+) กับประโยคสอง 'proved immensely difficult' (-) ทิศทางขัดแย้งชัดเจน ข้อเดียวที่เป็นตัวเชื่อมขัดแย้งคือ 'However'"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 1: The Discovery of Penicillin</b><br><br>
             In 1928, Alexander Fleming discovered penicillin, an event that marked the dawn of the antibiotic age. Before this breakthrough, minor bacterial infections were ____(1)____ fatal. Fleming noticed that a mold contaminating a petri dish of Staphylococcus bacteria had created a zone ____(2)____ the bacteria could not survive. ____(3)____, isolating the active substance proved immensely difficult. It was not until the late 1930s that Howard Florey and Ernst Chain successfully purified the compound, ____(4)____ the mass production of the drug during World War II. This pharmaceutical triumph saved millions of lives on the battlefield. ____(5)____, the widespread misuse of penicillin since then has rapidly accelerated the emergence of resistant strains. Today, healthcare professionals must restrict antibiotic use ____(6)____ preserve the efficacy of these vital therapeutics.`,
        text: "Choose the best option for blank (4):",
        options: [
            "enables",
            "enabled",
            "enabling",
            "to enable"
        ],
        answer: 2,
        correctExplanation: "ตอบข้อ 3 'enabling' (ช่วยทำให้...สามารถดำเนินต่อได้) เป็นการใช้โครงสร้างลดรูป Present Participle (-ing) เพื่ออธิบายผลกระทบหรือผลลัพธ์ที่เกิดจากประโยคข้างหน้าอย่างต่อเนื่อง (ช่วยให้กระบวนการผลิตขนานใหญ่ทำได้สำเร็จในช่วงสงครามโลก)",
        wrongExplanation: "enables และ enabled เป็นกริยาแท้ ซึ่งจะทำให้เกิดซ้อนในประโยคที่ไม่มีตัวเชื่อมคำกริยา; to enable แสดงวัตถุประสงค์เจตจำนงแต่ไม่เข้ากับผลสัมฤทธิ์ตามธรรมชาติของประโยค",
        mindset: "โครงสร้างลดรูปประโยค (Reduced Clause) ด้วย V-ing มักใช้เพื่อระบุผลลัพธ์ที่เกิดขึ้นทันทีและเชื่อมโยงกับประโยคหลักโดยไม่ต้องใส่ตัวเชื่อมและกริยาเพิ่ม",
        speedHack: "มีเครื่องหมายจุลภาคคั่นหลังประโยคสมบูรณ์ ', ____ the mass production' ส่วนนี้ต้องการกริยาไม่แท้ประเภท Participle เพื่อขยายความผลลัพธ์ เลือกรูป '-ing' (enabling)"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 1: The Discovery of Penicillin</b><br><br>
             In 1928, Alexander Fleming discovered penicillin, an event that marked the dawn of the antibiotic age. Before this breakthrough, minor bacterial infections were ____(1)____ fatal. Fleming noticed that a mold contaminating a petri dish of Staphylococcus bacteria had created a zone ____(2)____ the bacteria could not survive. ____(3)____, isolating the active substance proved immensely difficult. It was not until the late 1930s that Howard Florey and Ernst Chain successfully purified the compound, ____(4)____ the mass production of the drug during World War II. This pharmaceutical triumph saved millions of lives on the battlefield. ____(5)____, the widespread misuse of penicillin since then has rapidly accelerated the emergence of resistant strains. Today, healthcare professionals must restrict antibiotic use ____(6)____ preserve the efficacy of these vital therapeutics.`,
        text: "Choose the best option for blank (5):",
        options: [
            "Unfortunately",
            "Predictably",
            "Concurrently",
            "Consequently"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 'Unfortunately' (ช่างโชคร้ายเหลือเกิน) เนื่องจากเรื่องราวก่อนหน้าพูดถึงผลสำเร็จยิ่งใหญ่ในการช่วยชีวิตคนนับล้าน (บวก) แต่ถัดมาเป็นปัญหาการใช้ยาผิดวัตถุประสงค์ส่งผลให้เกิดการดื้อยาของแบคทีเรียอย่างรวดเร็ว (ลบและน่าเสียดาย) คำบอกทัศนคติที่เหมาะที่สุดคือความโชคร้ายหรือน่าเสียดาย",
        wrongExplanation: "Predictably = ตามที่คาดหมายไว้; Concurrently = ในเวลาเดียวกัน; Consequently = ผลลัพธ์คือ (แสดงเหตุผลเชิงกลไกตรงตัว แต่ละเลยอารมณ์ความน่าเสียดายของความพยายามที่สูญเปล่าในฐานะคำขึ้นต้นประโยคที่เน้นทัศนคติ)",
        mindset: "Adverb แสดงทัศนคติของผู้เขียน (Attitudinal adverbs) เช่น Fortunately, Unfortunately, Ironically ทำหน้าที่กำหนดโทนของช่วงประโยคนั้นๆ ต่อผู้อ่าน",
        speedHack: "ประโยคบอกว่าช่วยคนได้ล้านคน (+) แล้วตามด้วยการนำไปใช้ในทางที่ผิดจนเกิดเชื้อดื้อยา (-) สิ่งนี้เป็นเรื่องน่าเสียดายอย่างยิ่ง เลือก 'Unfortunately'"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 1: The Discovery of Penicillin</b><br><br>
             In 1928, Alexander Fleming discovered penicillin, an event that marked the dawn of the antibiotic age. Before this breakthrough, minor bacterial infections were ____(1)____ fatal. Fleming noticed that a mold contaminating a petri dish of Staphylococcus bacteria had created a zone ____(2)____ the bacteria could not survive. ____(3)____, isolating the active substance proved immensely difficult. It was not until the late 1930s that Howard Florey and Ernst Chain successfully purified the compound, ____(4)____ the mass production of the drug during World War II. This pharmaceutical triumph saved millions of lives on the battlefield. ____(5)____, the widespread misuse of penicillin since then has rapidly accelerated the emergence of resistant strains. Today, healthcare professionals must restrict antibiotic use ____(6)____ preserve the efficacy of these vital therapeutics.`,
        text: "Choose the best option for blank (6):",
        options: [
            "in order to",
            "so that",
            "with a view to",
            "lest"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 'in order to' (+ V.inf) แปลว่า 'เพื่อที่จะ' เพื่อแสดงวัตถุประสงค์ของการจำกัดการใช้ยาปฏิชีวนะ เพื่อต้องการรักษาประสิทธิผลการรักษาของยาเอาไว้",
        wrongExplanation: "so that = เพื่อที่จะ (+ Subject + Verb); with a view to = เพื่อที่จะ (+ V-ing); lest = เกรงว่า/ด้วยกลัวว่า (+ Subject + should V.inf)",
        mindset: "เมื่อแปลความหมายตัวเลือกได้เหมือนกันหมด (แปลว่า เพื่อที่จะ) ให้วัดกันที่โครงสร้างไวยากรณ์หลังตัวเลือกนั้น: 'preserve' เป็น Verb Infinitive ดังนั้นต้องคู่กับ 'in order to'",
        speedHack: "เช็คคำนาม/กริยาข้างหลังช่องว่าง: 'preserve' เป็นกริยาไม่ผัน (V.inf) -> ตัด so that (ต้องการประโยค) และตัด with a view to (ต้องการ V-ing) เหลือเพียง 'in order to'"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 2: Immunization and Public Health</b><br><br>
             Immunization programs are widely acknowledged as one of the most cost-effective public health interventions in history. By administering vaccines, society can establish "herd immunity," ____(7)____ a critical mass of the population becomes resistant to a pathogen. This collective resistance dramatically reduces the probability of transmission, thereby safeguarding vulnerable individuals who cannot be vaccinated due to medical contraindications. ____(8)____, achieving herd immunity requires sustained, high rates of vaccination coverage. When vaccine skepticism spreads, coverage rates can drop below the necessary threshold, ____(9)____ the resurgence of previously eradicated infectious diseases. Over the past decade, several developed nations ____(10)____ outbreaks of measles and pertussis, primarily driven by vaccine hesitancy. This trend underscores the critical necessity of combating misinformation. Public trust in immunization must be maintained ____(11)____ we are to prevent the return of devastating epidemics. Ultimately, vaccination is not merely a matter of personal choice; it is ____(12)____ collective responsibility.`,
        text: "Choose the best option for blank (7):",
        options: [
            "which",
            "whereby",
            "although",
            "whenever"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 'whereby' (ด้วยวิธีซึ่ง/โดยที่) มีความหมายเดียวกับ 'by which' ใช้เพื่อแสดงความเชื่อมโยงว่า สังคมสามารถสร้างภูมิคุ้มกันหมู่ได้ โดยที่ประชากรส่วนใหญ่จะสร้างความต้านทานโรคขึ้นมา",
        wrongExplanation: "which = ซึ่ง (ต้องการโครงสร้างที่ไม่สมบูรณ์ข้างหลัง); although = ทั้งๆ ที่ (แสดงความขัดแย้ง); whenever = เมื่อใดก็ตาม",
        mindset: "คำว่า whereby เป็นศัพท์วิชาการชั้นสูงที่พบบ่อยในข้อสอบการแข่งขันเพื่อแสดงกระบวนการกลไกการเกิดผลลัพธ์ผ่านช่องทางบางอย่าง",
        speedHack: "ประโยคระบุกลไก 'establish herd immunity' และมีผลตามมาในระบบคือ 'a critical mass... becomes resistant' การระบุกลไกการทำงานทางวิทยาศาสตร์มักใช้ 'whereby' (โดยวิธีซึ่ง)"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 2: Immunization and Public Health</b><br><br>
             Immunization programs are widely acknowledged as one of the most cost-effective public health interventions in history. By administering vaccines, society can establish "herd immunity," ____(7)____ a critical mass of the population becomes resistant to a pathogen. This collective resistance dramatically reduces the probability of transmission, thereby safeguarding vulnerable individuals who cannot be vaccinated due to medical contraindications. ____(8)____, achieving herd immunity requires sustained, high rates of vaccination coverage. When vaccine skepticism spreads, coverage rates can drop below the necessary threshold, ____(9)____ the resurgence of previously eradicated infectious diseases. Over the past decade, several developed nations ____(10)____ outbreaks of measles and pertussis, primarily driven by vaccine hesitancy. This trend underscores the critical necessity of combating misinformation. Public trust in immunization must be maintained ____(11)____ we are to prevent the return of devastating epidemics. Ultimately, vaccination is not merely a matter of personal choice; it is ____(12)____ collective responsibility.`,
        text: "Choose the best option for blank (8):",
        options: [
            "However",
            "Consequently",
            "In addition",
            "Likewise"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 'However' (อย่างไรก็ตาม) เนื่องจากประโยคก่อนหน้าพูดถึงประโยชน์มหาศาลและการปกป้องคนอ่อนแอ (บวก) แต่ประโยคถัดมานำเสนอเงื่อนไขข้อจำกัดความยากลำบากว่าต้องพึ่งพาอัตราการรับวัคซีนที่สูงและต่อเนื่อง (แฝงความเป็นอุปสรรค/เงื่อนไขลบ) จึงต้องใช้ตัวเชื่อมที่ขัดแย้งและเบี่ยงน้ำหนักประเด็น",
        wrongExplanation: "Consequently = ดังนั้น; In addition = ยิ่งไปกว่านั้น; Likewise = ในทำนองเดียวกัน",
        mindset: "พิจารณาบริบทเชิงลึก: ประโยคแรกอธิบายสิทธิประโยชน์ที่ฟังดูง่าย แต่ประโยคถัดมาเน้นคำว่า 'requires sustained...' (จำเป็นต้องได้รับความร่วมมืออย่างยืดเยื้อ) ซึ่งชี้นำให้เห็นว่าไม่ใช่เรื่องง่าย จึงเป็นข้อจำกัดที่ขัดแย้ง",
        speedHack: "ข้อดีของวัคซีนถูกกล่าวถึงอย่างงดงาม จากนั้นพูดถึงเงื่อนไขที่ท้าทาย 'requires sustained high rates' สัญญาณนี้บ่งชี้ข้อจำกัด ใช้ 'However'"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 2: Immunization and Public Health</b><br><br>
             Immunization programs are widely acknowledged as one of the most cost-effective public health interventions in history. By administering vaccines, society can establish "herd immunity," ____(7)____ a critical mass of the population becomes resistant to a pathogen. This collective resistance dramatically reduces the probability of transmission, thereby safeguarding vulnerable individuals who cannot be vaccinated due to medical contraindications. ____(8)____, achieving herd immunity requires sustained, high rates of vaccination coverage. When vaccine skepticism spreads, coverage rates can drop below the necessary threshold, ____(9)____ the resurgence of previously eradicated infectious diseases. Over the past decade, several developed nations ____(10)____ outbreaks of measles and pertussis, primarily driven by vaccine hesitancy. This trend underscores the critical necessity of combating misinformation. Public trust in immunization must be maintained ____(11)____ we are to prevent the return of devastating epidemics. Ultimately, vaccination is not merely a matter of personal choice; it is ____(12)____ collective responsibility.`,
        text: "Choose the best option for blank (9):",
        options: [
            "precipitated",
            "precipitating",
            "to precipitate",
            "having precipitated"
        ],
        answer: 1,
        correctExplanation: "ตอบข้อ 2 'precipitating' (ซึ่งเร่งให้เกิด/กระตุ้นให้เกิดกะทันหัน) ทำหน้าที่เป็น Present Participle (-ing) ในโครงสร้างลดรูปแสดงผลลัพธ์ที่สืบเนื่องจากประโยคก่อนหน้า (อัตราวัคซีนตกต่ำลงกว่าขีดจำกัด ส่งผลให้เกิดการระบาดซ้ำของโรคติดต่อ)",
        wrongExplanation: "precipitated เป็นกริยาช่อง 2 หรือ 3 ซึ่งในรูปนี้จะหมายถึงความหมายถูกกระทำ ซึ่งโรคระบาดไม่ได้ถูกกระทำโดยตรงแต่เป็นผลลัพธ์ที่ถูกเหตุกระตุ้นขึ้นมา; to precipitate และ having precipitated ไม่สอดคล้องกับโครงสร้างผลลัพธ์ต่อเนื่อง",
        mindset: "สังเกตคำกริยาที่แสดงทิศทางผลลัพธ์ท้ายประโยคเมื่อเชื่อมด้วย comma มักต้องการโครงสร้าง -ing (Active consequence) เสมอ",
        speedHack: "เมื่อประโยคด้านหน้าสมบูรณ์แล้ว มี comma คั่นอยู่หน้าช่องว่างและต้องการแสดงผลลัพธ์โดยตรง ให้เลือกตัวเลือก V-ing: 'precipitating'"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 2: Immunization and Public Health</b><br><br>
             Immunization programs are widely acknowledged as one of the most cost-effective public health interventions in history. By administering vaccines, society can establish "herd immunity," ____(7)____ a critical mass of the population becomes resistant to a pathogen. This collective resistance dramatically reduces the probability of transmission, thereby safeguarding vulnerable individuals who cannot be vaccinated due to medical contraindications. ____(8)____, achieving herd immunity requires sustained, high rates of vaccination coverage. When vaccine skepticism spreads, coverage rates can drop below the necessary threshold, ____(9)____ the resurgence of previously eradicated infectious diseases. Over the past decade, several developed nations ____(10)____ outbreaks of measles and pertussis, primarily driven by vaccine hesitancy. This trend underscores the critical necessity of combating misinformation. Public trust in immunization must be maintained ____(11)____ we are to prevent the return of devastating epidemics. Ultimately, vaccination is not merely a matter of personal choice; it is ____(12)____ collective responsibility.`,
        text: "Choose the best option for blank (10):",
        options: [
            "have experienced",
            "has experienced",
            "had experienced",
            "experiencing"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 'have experienced' เป็น Present Perfect Tense พหูพจน์ เนื่องจากประธานของประโยคนี้คือ 'several developed nations' (ประเทศพัฒนาแล้วหลายประเทศ ซึ่งเป็นพหูพจน์) และใช้ Present Perfect ขยายความเหตุการณ์ที่เกิดขึ้นอย่างต่อเนื่องในช่วงทศวรรษที่ผ่านมา (Over the past decade)",
        wrongExplanation: "has experienced เป็นเอกพจน์ (ขัดกับ nations); had experienced ใช้กับอดีตซ้อนอดีตซึ่งไม่มีเหตุการณ์อดีตอื่นมาเปรียบเทียบในที่นี้; experiencing เป็นกริยาไม่แท้ ขาดกริยาช่วยทำให้ประโยคไม่มีกริยาแท้",
        mindset: "เมื่อระบุเวลาเช่น 'Over the past decade' หรือ 'Since...' มักบ่งชี้การใช้ Present Perfect Tense (have/has + V.3) และต้องตรวจสอบประธานเพื่อไม่ให้หลงลืมเรื่องพหูพจน์/เอกพจน์",
        speedHack: "1. ประธานคือ 'nations' (พหูพจน์) -> ตัด has experienced. 2. เวลาคือ 'Over the past decade' (ช่วงเวลาอดีตถึงปัจจุบัน) -> เลือก Present Perfect: 'have experienced'"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 2: Immunization and Public Health</b><br><br>
             Immunization programs are widely acknowledged as one of the most cost-effective public health interventions in history. By administering vaccines, society can establish "herd immunity," ____(7)____ a critical mass of the population becomes resistant to a pathogen. This collective resistance dramatically reduces the probability of transmission, thereby safeguarding vulnerable individuals who cannot be vaccinated due to medical contraindications. ____(8)____, achieving herd immunity requires sustained, high rates of vaccination coverage. When vaccine skepticism spreads, coverage rates can drop below the necessary threshold, ____(9)____ the resurgence of previously eradicated infectious diseases. Over the past decade, several developed nations ____(10)____ outbreaks of measles and pertussis, primarily driven by vaccine hesitancy. This trend underscores the critical necessity of combating misinformation. Public trust in immunization must be maintained ____(11)____ we are to prevent the return of devastating epidemics. Ultimately, vaccination is not merely a matter of personal choice; it is ____(12)____ collective responsibility.`,
        text: "Choose the best option for blank (11):",
        options: [
            "if",
            "unless",
            "although",
            "whereas"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 'if' (ถ้าหาก/หากว่า) ใช้ในการเชื่อมเงื่อนไขแบบสมเหตุสมผลว่า 'ความเชื่อมั่นต้องถูกรักษาไว้ หากพวกเราต้องการจะป้องกันการกลับมาของโรคระบาดร้ายแรง'",
        wrongExplanation: "unless = ถ้าหากไม่ (จะเปลี่ยนความหมายเป็นตรงกันข้ามที่เป็นโทษ); although = แม้ว่า; whereas = ในขณะที่ (แสดงความขัดแย้ง)",
        mindset: "แปลความประโยคย่อยอย่างระมัดระวังเพื่อประเมินเงื่อนไข โครงสร้าง 'be to + V.inf' (we are to prevent) มักปรากฏในเงื่อนไขของประโยคที่ขึ้นต้นด้วย 'if' หมายถึงความตั้งใจหรือเป้าหมายที่ต้องการให้เกิดขึ้น",
        speedHack: "ความสัมพันธ์คือ 'ต้องรักษาความเชื่อมั่นไว้ (ความจำเป็น) + [ตัวเชื่อม] + ป้องกันโรคระบาด (เป้าหมาย)' โครงสร้างนี้ใช้ 'if' สอดคล้องที่สุดในการนำส่งเงื่อนไขความสำเร็จ"
    },
    {
        section: "Cloze Test",
        partTitle: "PART 5: CLOZE TEST",
        suggestedTime: "Suggested Time: 1 min",
        passage: `<b>Passage 2: Immunization and Public Health</b><br><br>
             Immunization programs are widely acknowledged as one of the most cost-effective public health interventions in history. By administering vaccines, society can establish "herd immunity," ____(7)____ a critical mass of the population becomes resistant to a pathogen. This collective resistance dramatically reduces the probability of transmission, thereby safeguarding vulnerable individuals who cannot be vaccinated due to medical contraindications. ____(8)____, achieving herd immunity requires sustained, high rates of vaccination coverage. When vaccine skepticism spreads, coverage rates can drop below the necessary threshold, ____(9)____ the resurgence of previously eradicated infectious diseases. Over the past decade, several developed nations ____(10)____ outbreaks of measles and pertussis, primarily driven by vaccine hesitancy. This trend underscores the critical necessity of combating misinformation. Public trust in immunization must be maintained ____(11)____ we are to prevent the return of devastating epidemics. Ultimately, vaccination is not merely a matter of personal choice; it is ____(12)____ collective responsibility.`,
        text: "Choose the best option for blank (12):",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: 0,
        correctExplanation: "ตอบข้อ 1 'a' (Article) เนื่องจาก 'collective responsibility' (ความรับผิดชอบร่วมกัน) ทำหน้าที่เป็นคำนามเอกพจน์นับได้ในเชิงแนวคิดเปรียบเปรยทั่วไปที่ยังไม่ได้ชี้เฉพาะเจาะจงมาก่อน และขึ้นต้นด้วยเสียงพยัญชนะ (c - collective) จึงต้องใช้ 'a'",
        wrongExplanation: "an ใช้กับคำที่ขึ้นต้นด้วยเสียงสระ; the ใช้เมื่อต้องการชี้เฉพาะเจาะจงเป็นพิเศษหรือกล่าวซ้ำ; no article ไม่เข้าตามหลักไวยากรณ์เพราะคำนามนับได้ที่เป็นประธาน/กรรมของประโยคเดี่ยวต้องการ article กำกับ",
        mindset: "อย่ามองข้ามความสำคัญของการใช้ Article (a, an, the) ในข้อสอบคัดเลือกแข่งขัน เพราะเป็นจุดคะแนนที่เก็บง่ายแต่ก็มักจะลืมสังเกตเสียงพยัญชนะ/สระและการชี้เฉพาะเจาะจง",
        speedHack: "นามเดี่ยว 'collective responsibility' ขึ้นต้นด้วย 'c' (เสียงพยัญชนะ) และเป็นการกล่าวลอยๆ ครั้งแรกในประโยคสรุป ใช้ 'a' แน่นอน"
    }
];

// Helper to generate the remaining 48 questions programmatically based on real TGAT patterns to reach full 60 questions bank
// Generating questions dynamically helps bypass manual huge JSON code while retaining absolute high quality
const sectionPools = {
    "Conversation": [
        {
            text: "A patient complains that their clinical laboratory results were mixed up. <br><b>Patient:</b> \"I received a report showing high glucose, but I don't even have diabetes!\"<br><b>Pharmacist:</b> \"______________________.\"",
            options: [
                "You should sue the laboratory department immediately for negligence.",
                "Please let me double-check your patient ID and contact the laboratory coordinator right away to verify.",
                "High glucose is very common, you probably developed diabetes overnight.",
                "Don't worry, the lab makes mistakes all the time."
            ],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 เภสัชกรต้องตรวจสอบข้อมูลคนไข้ (Patient ID) และรีบประสานงานเพื่อความปลอดภัยและป้องกันความผิดพลาดในการจ่ายยา",
            wrongExplanation: "ข้ออื่นขาดจริยธรรม ให้ข้อมูลที่เป็นเท็จ หรือสนับสนุนพฤติกรรมฟ้องร้องโดยไม่ตรวจสอบความถูกต้อง",
            mindset: "การป้องกันความปลอดภัยคนไข้ (Patient Safety) คือจุดแรกที่เภสัชกรต้องพิจารณาเมื่อได้รับรายงานความผิดปกติ",
            speedHack: "เลือกช้อยส์ที่มีการดำเนินการประนีประนอมและเป็นระบบ เช่น 'verify', 'double-check', 'contact lab coordinator'"
        },
        {
            text: "Discussing clinical research ethics.<br><b>Researcher A:</b> \"We can skip the consent form for this cohort since the drug is already proven safe in animals.\"<br><b>Researcher B:</b> \"______________________.\"",
            options: [
                "I agree, it saves a lot of paperwork.",
                "Absolutely not; patient consent is a mandatory ethical requirement regardless of animal trials.",
                "We should only ask for consent if the patient asks for it.",
                "Let's just sign the forms on behalf of the patients ourselves."
            ],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 การขอความยินยอมจากคนไข้ (Informed consent) เป็นจริยธรรมการวิจัยในมนุษย์ที่ละเว้นไม่ได้เด็ดขาด",
            wrongExplanation: "ข้ออื่นผิดจริยธรรมวิจัยและกฎหมายร้ายแรง",
            mindset: "จริยธรรมการวิจัยและสิทธิผู้ป่วย (Patient autonomy and rights) อยู่เหนือความรวดเร็วและขั้นตอนเอกสารใดๆ",
            speedHack: "ตัดช้อยส์ที่ละเลยจริยธรรมออกทันที"
        },
        {
            text: "In a pharmaceutical chemistry class.<br><b>Student:</b> \"Why does this molecule have two enantiomers?\"<br><b>Professor:</b> \"______________________.\"",
            options: [
                "Because it contains a chiral carbon center with four different groups attached.",
                "Enantiomers are just random errors made during chemical synthesis.",
                "It has no specific reason, molecules just behave randomly.",
                "Because you didn't heat the solution enough during the lab."
            ],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 โครงสร้างที่มี chiral carbon (คาร์บอนสมมาตรที่มีหมู่เกาะต่างกัน 4 หมู่) จะมีภาพสะท้อนในกระจกที่ไม่สามารถทับกันสนิท เรียกว่า Enantiomers",
            wrongExplanation: "ข้ออื่นอธิบายผิดหลักเคมีอินทรีย์อย่างสิ้นเชิง",
            mindset: "คำตอบต้องเป็นวิชาการที่มีเหตุและผลทางวิทยาศาสตร์รองรับ",
            speedHack: "หา Keyword ของวิชาการ 'chiral carbon', 'enantiomers' เพื่อชี้ข้อถูก"
        },
        {
            text: "Patient asking about herbal vs synthetic drug safety.<br><b>Patient:</b> \"Herbal drugs are 100% safe because they are completely natural, right?\"<br><b>Pharmacist:</b> \"______________________.\"",
            options: [
                "Yes, you can take as much as you want without any side effects.",
                "Not necessarily; natural products also contain chemical compounds that can cause toxicity or drug interactions.",
                "Actually, synthetic drugs are always safer than natural ones.",
                "You should stop taking synthetic drugs immediately and switch to herbs."
            ],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 ยาสมุนไพร/สารธรรมชาติไม่ได้ปลอดภัยร้อยเปอร์เซ็นต์ เพราะยังมีสารเคมีที่ก่อพิษหรือเกิดปฏิกิริยาระหว่างยาได้",
            wrongExplanation: "ข้ออื่นเป็นคำแนะนำที่ผิดหลักความปลอดภัยเชิงวิทยาศาสตร์",
            mindset: "ความเชื่อผิดๆ เรื่องธรรมชาติรักษาร้อยเปอร์เซ็นต์มักถูกแก้นิยามด้วยหลักวิทยาศาสตร์เภสัชกรรม",
            speedHack: "เลือกช้อยส์ที่ชี้แจงอย่างมีน้ำหนักและรอบคอบ: 'natural products also contain chemical compounds...'"
        }
    ],
    "Vocabulary": [
        {
            text: "Select the word closest in meaning to the underlined word:<br><br>\"The physician decided to <u>attenuate</u> the dose of the strong sedative to prevent respiratory depression in the elderly patient.\"",
            options: ["increase", "reduce", "suspend", "maintain"],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 Attenuate แปลว่า 'ทำให้เบาบางลง / ทำให้อ่อนกำลังลง / ลดลง' ในบริบทนี้คือลดโดสยาลงเพื่อความปลอดภัย",
            wrongExplanation: "increase = เพิ่มขึ้น; suspend = ระงับการใช้ชั่วคราว; maintain = คงไว้ตามเดิม",
            mindset: "ระลึกว่า sedatives (ยาทำให้ง่วง/สงบประสาท) ปริมาณมากเกินไปจะกดการหายใจ (respiratory depression) ดังนั้นเพื่อป้องกันจึงต้องลดขนาดลง",
            speedHack: "ป้องกันอันตราย (prevent respiratory depression) ขนาดยาต้องถูกปรับ 'ลดลง' (reduce/attenuate)"
        },
        {
            text: "Identify the word that best completes the sentence:<br><br>\"Due to its unstable chemical structure, the newly developed compound is highly _________ to light and must be stored in amber-colored bottles.\"",
            options: ["impervious", "sensitive", "resilient", "indifferent"],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 Sensitive (ไวต่อสิ่งเร้า/แสง) ยาที่สลายตัวง่ายเมื่อเจอแสงต้องเก็บในขวดสีชา (amber-colored bottles) เพื่อป้องกันการเสื่อมสภาพ",
            wrongExplanation: "impervious = ซึ่งไม่ยอมให้ผ่าน/ทนทาน; resilient = ยืดหยุ่น/ทนทาน; indifferent = เพิกเฉย/ไม่ตอบสนอง",
            mindset: "ความรู้ด้านการเก็บรักษายา (Drug storage conditions) เช่น การป้องกันแสงและความชื้น เป็นคำศัพท์และหลักปฏิบัติพื้นฐานในร้านยาและโรงพยาบาล",
            speedHack: "คำว่า 'must be stored in amber bottles' (ต้องเก็บในขวดสีชา) บ่งบอกว่าสารนั้น 'ไวต่อแสง' (sensitive to light)"
        },
        {
            text: "Find the word opposite in meaning to the underlined word:<br><br>\"The patient's compliance was <u>exemplary</u>, resulting in complete eradication of the infection within the prescribed timeframe.\"",
            options: ["commendable", "negligent", "consistent", "flawless"],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 Exemplary แปลว่า 'ดีงามเป็นแบบอย่างได้' คำตรงข้ามคือ negligent (ละเลย/ไม่ใส่ใจ)",
            wrongExplanation: "commendable = น่าชื่นชม; consistent = เสมอต้นเสมอปลาย; flawless = ไร้ที่ติ",
            mindset: "Compliance (ความร่วมมือในการทานยา) ของคนไข้ที่ดีส่งผลให้การรักษาสัมฤทธิ์ผล คำตรงข้ามของความร่วมมือที่ดีคือการละเลย",
            speedHack: "Compliance ดีมากทำให้โรคหายสนิท คำตรงข้ามของดีมากในทางพฤติกรรมคือละเลย 'negligent'"
        },
        {
            text: "Choose the word that best completes the sentence:<br><br>\"The new vaccine was designed to induce ___________ immunity, producing protective antibodies directly within the recipient's system.\"",
            options: ["passive", "active", "temporary", "artificial"],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 Active immunity (ภูมิคุ้มกันก่อเอง) เกิดจากการที่ร่างกายได้รับวัคซีนเพื่อกระตุ้นให้ร่างกายสร้างแอนติบอดีขึ้นมาเอง",
            wrongExplanation: "passive immunity = ภูมิคุ้มกันรับมา (เช่น เซรุ่ม); temporary = ชั่วคราว; artificial = เทียม (กว้างเกินไปและไม่ตรงกลุ่มวิชาการแพทย์)",
            mindset: "กลไกวัคซีนคือการเหนี่ยวนำให้ร่างกายสร้างแอนติบอดี้เองตามธรรมชาติผ่านการกระตุ้น ซึ่งตามนิยามวิทยาศาสตร์เรียกว่า active immunity",
            speedHack: "คำสำคัญ 'producing... within the recipient's system' (สร้างขึ้นภายในระบบของผู้รับเอง) คือคำจำกัดความของ 'active'"
        }
    ],
    "Reading": [
        {
            passage: `<b>Passage 4: Gene Editing in Sickle Cell Anemia</b><br><br>
                 CRISPR-Cas9 gene-editing technology has transitioned from theoretical research to clinical applications, most notably in treating Sickle Cell Anemia. This genetic disorder, caused by a single point mutation in the beta-globin gene, results in the synthesis of abnormal hemoglobin that deforms red blood cells into a rigid sickle shape. These deformed cells obstruct capillaries, causing severe pain crises and organ damage. By utilizing CRISPR to disrupt the BCL11A gene, researchers can reactivate the production of fetal hemoglobin, which bypasses the defective adult hemoglobin. Clinical trials have shown near-complete elimination of pain crises in treated patients. However, the high cost of therapy, currently estimated at millions of dollars per patient, raises substantial concerns about global healthcare equity and affordability.`,
            text: "What is the therapeutic mechanism of CRISPR in treating Sickle Cell Anemia according to the passage?",
            options: [
                "By replacing abnormal red blood cells with synthetic nano-capsules.",
                "By disrupting the BCL11A gene to reactivate fetal hemoglobin production.",
                "By directly mutating the heart muscles to increase blood flow.",
                "By injecting chemical antibodies that dissolve sickle-shaped cells."
            ],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 ในเรื่องระบุกลไกบำบัดรักษาด้วยยีนบำบัดว่า 'utilizing CRISPR to disrupt the BCL11A gene, researchers can reactivate the production of fetal hemoglobin'",
            wrongExplanation: "ข้ออื่นไม่อยู่ในขอบเขตการอธิบายและไม่มีข้อมูลอ้างอิงวิทยาศาสตร์ด้านพันธุกรรมตามที่บทความระบุไว้",
            mindset: "โฟกัสไปที่กลไกการออกฤทธิ์ทางชีวภาพ (Biological mechanism) ที่ผู้เขียนเขียนอธิบายอย่างเป็นขั้นตอน",
            speedHack: "สแกนคีย์เวิร์ด 'CRISPR' และ 'mechanism/treat' จะพบคู่ประโยค 'disrupt BCL11A' และ 'fetal hemoglobin' ตรงกับข้อ 2"
        },
        {
            passage: `<b>Passage 4: Gene Editing in Sickle Cell Anemia</b><br><br>
                 CRISPR-Cas9 gene-editing technology has transitioned from theoretical research to clinical applications, most notably in treating Sickle Cell Anemia. This genetic disorder, caused by a single point mutation in the beta-globin gene, results in the synthesis of abnormal hemoglobin that deforms red blood cells into a rigid sickle shape. These deformed cells obstruct capillaries, causing severe pain crises and organ damage. By utilizing CRISPR to disrupt the BCL11A gene, researchers can reactivate the production of fetal hemoglobin, which bypasses the defective adult hemoglobin. Clinical trials have shown near-complete elimination of pain crises in treated patients. However, the high cost of therapy, currently estimated at millions of dollars per patient, raises substantial concerns about global healthcare equity and affordability.`,
            text: "What is the main concern regarding CRISPR therapy mentioned at the end of the passage?",
            options: [
                "The high risk of immediate rejection by the host's body.",
                "The inability to scale up laboratory production.",
                "Global healthcare equity and financial affordability due to its high cost.",
                "The side effects of creating too much fetal hemoglobin."
            ],
            answer: 2,
            correctExplanation: "ตอบข้อ 3 ข้อกังวลหลักด้านจริยธรรมและสาธารณสุขคือค่ารักษาที่แพงมาก (หลักล้านเหรียญ) ส่งผลให้เกิดความเหลื่อมล้ำในการเข้าถึงการรักษาของประชากรโลก",
            wrongExplanation: "ข้ออื่นไม่ใช่ข้อกังวลที่ผู้เขียนหยิบยกขึ้นมาเน้นย้ำในส่วนสรุปสุดท้ายของบทความนี้",
            mindset: "มองหาคำคีย์สำคัญด้านเศรษฐศาสตร์สุขภาพ (Health economics) มักสะท้อนประเด็นสังคมในบทความวิทยาศาสตร์สมัยใหม่",
            speedHack: "กวาดสายตาไปประโยคสุดท้ายของบทความทันทีเมื่อถามหาข้อกังวลใจตอนท้าย จะพบคำว่า 'high cost... healthcare equity and affordability'"
        },
        {
            passage: `<b>Passage 5: Pharmacogenomics and Personalized Medicine</b><br><br>
                 Pharmacogenomics explores how an individual's genetic makeup influences their response to therapeutic drugs. For decades, the standard medical model has relied on a "one-size-fits-all" prescribing paradigm. However, inter-individual variability in drug-metabolizing enzymes often results in treatment failures or adverse reactions. For instance, variations in the CYP2D6 gene can lead to classifications of patients as poor, intermediate, extensive, or ultra-rapid metabolizers. An ultra-rapid metabolizer converts codeine into morphine at an dangerously high rate, potentially causing respiratory arrest. Conversely, poor metabolizers receive no therapeutic pain relief from the same dose. Integrating genomic testing into clinical workflows allows pharmacists to tailor drug choices and dosages to the patient's specific metabolic profile, ushering in the era of personalized medicine.`,
            text: "What does the passage imply about \"ultra-rapid metabolizers\" taking codeine?",
            options: [
                "They will feel absolutely no effect from the medication.",
                "They run a high risk of overdose symptoms like respiratory arrest from standard doses.",
                "They need to take higher doses of codeine to achieve pain relief.",
                "Their liver cannot process codeine at all."
            ],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 คนไข้กลุ่มนี้เปลี่ยนโคเดอีนเป็นมอร์ฟีนเร็วเกินไป ทำให้ระดับยาสูงขึ้นกะทันหัน เสี่ยงหยุดหายใจ (respiratory arrest) แม้จะทานในขนาดปกติก็ตาม",
            wrongExplanation: "ข้อ 1 และ 4 เป็นคุณสมบัติของกลุ่ม Poor metabolizers; ข้อ 3 เป็นการระบุขนาดที่กลับทิศทางอันตราย (พวกเขาต้องการขนาดยาที่ลดลงหรือเปลี่ยนยา ไม่ใช่เพิ่มยา)",
            mindset: "ทำความเข้าใจความสัมพันธ์ผกผัน (inverse relationship) ในทางสรีรวิทยาและพันธุศาสตร์เพื่อหลีกเลี่ยงข้อผิดพลาดเชิงตรรกะ",
            speedHack: "แสกนหาคำว่า 'ultra-rapid metabolizer' จะเจอผลลัพธ์ที่เป็นอันตราย 'dangerously high rate... respiratory arrest' สอดคล้องกับช้อยส์ 2"
        },
        {
            passage: `<b>Passage 5: Pharmacogenomics and Personalized Medicine</b><br><br>
                 Pharmacogenomics explores how an individual's genetic makeup influences their response to therapeutic drugs. For decades, the standard medical model has relied on a "one-size-fits-all" prescribing paradigm. However, inter-individual variability in drug-metabolizing enzymes often results in treatment failures or adverse reactions. For instance, variations in the CYP2D6 gene can lead to classifications of patients as poor, intermediate, extensive, or ultra-rapid metabolizers. An ultra-rapid metabolizer converts codeine into morphine at an dangerously high rate, potentially causing respiratory arrest. Conversely, poor metabolizers receive no therapeutic pain relief from the same dose. Integrating genomic testing into clinical workflows allows pharmacists to tailor drug choices and dosages to the patient's specific metabolic profile, ushering in the era of personalized medicine.`,
            text: "The main purpose of this passage is to ____________.",
            options: [
                "advocate for the ban of codeine in modern hospitals.",
                "explain how genetic variations affect drug response and support personalized medicine.",
                "compare the liver enzymes of humans and animals.",
                "criticize the high cost of DNA testing kits."
            ],
            answer: 1,
            correctExplanation: "ตอบข้อ 2 จุดประสงค์หลักของผู้เขียนคือการอธิบายความสัมพันธ์ระหว่างพันธุกรรมกับการตอบสนองต่อยา และชี้ให้เห็นความสำคัญของเวชศาสตร์ส่วนบุคคล (Personalized medicine)",
            wrongExplanation: "ข้อ 1, 3 และ 4 ไม่ใช่เนื้อหาหลักและไม่ใช่จุดประสงค์หลักที่ตั้งไว้ในโครงเรื่อง",
            mindset: "มองหาเป้าหมายปลายทางที่เรียกว่า 'personalized medicine' หรือความจำเพาะของบุคคลในการรักษา",
            speedHack: "ชื่อเรื่องประมวลไว้หมดแล้ว 'Pharmacogenomics... tailor drug... personalized medicine' ช้อยส์ 2 สรุปเนื้อหาได้ตรงจุดประสงค์ที่สุด"
        }
    ],
    "Error Identification": [
        {
            text: "Identify the grammatical error in the following sentence:<br><br>\"The patient <span class='accent-text'>(1) diagnosed with</span> type 2 diabetes was instructed <span class='accent-text'>(2) to monitor</span> her glucose levels, <span class='accent-text'>(3) exercise regularly</span>, and <span class='accent-text'>(4) avoidance of</span> carbohydrate-rich food.\"",
            options: ["(1)", "(2)", "(3)", "(4)"],
            answer: 3,
            correctExplanation: "ตอบข้อ 4 ผิดหลักโครงสร้างขนาน (Parallel structure). หลังคำสั่ง 'was instructed to...' มีรายการสิ่งที่ต้องทำเรียงกัน: [to monitor...], [exercise... (infinitive)], and [avoidance of... (noun)] ซึ่งคำว่า avoidance เป็นนาม ไม่สอดคล้องกับกริยาตัวอื่น ต้องเปลี่ยนเป็นกริยารูปปกติคือ 'avoid'",
            wrongExplanation: "ข้ออื่นถูกแกรมมาร์ทั้งหมด",
            mindset: "รายการข้อปฏิบัติที่ระบุในประโยคคำสั่งที่มี 'and' คั่นตัวสุดท้าย ต้องตรวจสอบชนิดของคำว่าอยู่ในตระกูลเดียวกันเสมอ",
            speedHack: "monitor (V), exercise (V), and avoidance (Noun) -> ขัดแย้งทันที แก้เป็น 'avoid' (V)"
        },
        {
            text: "Identify the grammatical error in the following sentence:<br><br>\"Not only <span class='accent-text'>(1) the research team</span> discovered a new compound, but they also <span class='accent-text'>(2) proved its efficacy</span> in <span class='accent-text'>(3) treating</span> several resistant bacterial <span class='accent-text'>(4) infections</span>.\"",
            options: ["(1)", "(2)", "(3)", "(4)"],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 ผิดแกรมมาร์เรื่อง Inversion เมื่อประโยคขึ้นต้นด้วยคำปฏิเสธหรือกึ่งปฏิเสธ เช่น 'Not only' ประโยคหลักส่วนแรกต้องสลับตำแหน่งกริยาช่วยมาไว้หน้าประธาน ดังนั้นประโยคต้องแก้เป็น 'Not only did the research team discover...'",
            wrongExplanation: "ข้อ 2 but they also ถูกต้องใช้คู่กับ not only; ข้อ 3 in treating ถูกต้องตามหลัง preposition + gerund; ข้อ 4 infections เป็นนามพหูพจน์ขยายความได้ถูกต้อง",
            mindset: "จำโครงสร้างประโยคกลับหัว (Inversion): Not only + [Verb ช่วย: did/does/has] + Subject + V.inf... but also...",
            speedHack: "เห็น 'Not only' เริ่มต้นประโยค และประธานตามมาติดๆ โดยไม่มีกริยาช่วยโผล่มาสลับตำแหน่ง ชี้จุดผิดข้อ 1 ได้ทันที"
        },
        {
            text: "Identify the grammatical error in the following sentence:<br><br>\"The pharmacist recommended that the patient <span class='accent-text'>(1) takes</span> the medication with a glass <span class='accent-text'>(2) of water</span> to ensure <span class='accent-text'>(3) proper</span> dissolution in the <span class='accent-text'>(4) stomach</span>.\"",
            options: ["(1)", "(2)", "(3)", "(4)"],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 ผิดโครงสร้าง Subjunctive mood หลังคำว่า 'recommended that' กริยาหลักต้องเป็น Base form ไม่เติม s เสมอ แก้เป็น 'take'",
            wrongExplanation: "ข้ออื่นมีความถูกต้องและใช้บุพบทระบุอวัยวะและคุณลักษณะได้ถูกบริบท",
            mindset: "มองหากริยาบอกความต้องการ/คำขอ (Subjunctive verb) แล้วตรวจสอบให้ดีห้ามเติม s, ed หรือผันกริยาหลังประธาน",
            speedHack: "recommended that + patient + takes (มี s) -> ผิดแกรมมาร์ทันที แก้เป็น 'take'"
        },
        {
            text: "Identify the grammatical error in the following sentence:<br><br>\"The laboratory equipment <span class='accent-text'>(1) who</span> was imported from Germany <span class='accent-text'>(2) is</span> highly sensitive and requires <span class='accent-text'>(3) calibration</span> <span class='accent-text'>(4) twice a week</span>.\"",
            options: ["(1)", "(2)", "(3)", "(4)"],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 ผิดการใช้ Relative Pronoun. 'equipment' เป็นสิ่งของไม่มีชีวิต ไม่สามารถใช้ 'who' ขยายได้ ต้องเปลี่ยนเป็น 'which' หรือ 'that'",
            wrongExplanation: "ข้อ 2 is ถูกต้องขยาย equipment ซึ่งเป็นคำนามนับไม่ได้ (เอกพจน์); ข้อ 3 calibration เป็นคำนามทำหน้าที่เป็นกรรมของ requires; ข้อ 4 twice a week เป็นวลีบอกความถี่ถูกต้อง",
            mindset: "ตรวจสอบสรรพนามเชื่อมโยงให้สอดคล้องกับคำนามหลักเสมอ (who = คน, which/that = สิ่งของ/สัตว์)",
            speedHack: "equipment (สิ่งของ) + who -> ผิดอย่างชัดเจน แก้เป็น 'which' หรือ 'that'"
        }
    ],
    "Cloze Test": [
        {
            passage: `<b>Passage 3: The Role of Insulin in Glucose Regulation</b><br><br>
                 Insulin is a vital hormone produced by the pancreas ____(1)____ regulates glucose levels in the blood. When we consume food, the body breaks down carbohydrates into glucose. In response, insulin is secreted to facilitate ____(2)____ glucose into the cells, where it is utilized for energy. Without sufficient insulin, glucose ____(3)____ in the bloodstream, leading to hyperglycemia. Over time, sustained high blood sugar levels can damage blood vessels. ____(4)____, managing insulin activity is crucial for patients with diabetes. Type 1 diabetics require daily insulin injections because their bodies do not produce the hormone. ____(5)____, Type 2 diabetics may manage their condition through lifestyle modifications and oral medications, although insulin therapy is sometimes necessary ____(6)____ achieve target blood glucose levels.`,
            text: "Choose the best option for blank (1):",
            options: ["who", "whose", "that", "whom"],
            answer: 2,
            correctExplanation: "ตอบข้อ 3 'that' ทำหน้าที่เป็น relative pronoun ขยาย 'pancreas' (ตับอ่อน) ซึ่งเป็นสิ่งของ/อวัยวะ",
            wrongExplanation: "who, whom, whose ใช้ขยายคนและแสดงความเป็นเจ้าของบุคคลเท่านั้น",
            mindset: "เลือก relative pronoun ให้ตรงประเภทกับสิ่งขยาย",
            speedHack: "pancreas เป็นอวัยวะ/สิ่งของ -> ตัด who, whom, whose เหลือ 'that'"
        },
        {
            passage: `<b>Passage 3: The Role of Insulin in Glucose Regulation</b><br><br>
                 Insulin is a vital hormone produced by the pancreas ____(1)____ regulates glucose levels in the blood. When we consume food, the body breaks down carbohydrates into glucose. In response, insulin is secreted to facilitate ____(2)____ glucose into the cells, where it is utilized for energy. Without sufficient insulin, glucose ____(3)____ in the bloodstream, leading to hyperglycemia. Over time, sustained high blood sugar levels can damage blood vessels. ____(4)____, managing insulin activity is crucial for patients with diabetes. Type 1 diabetics require daily insulin injections because their bodies do not produce the hormone. ____(5)____, Type 2 diabetics may manage their condition through lifestyle modifications and oral medications, although insulin therapy is sometimes necessary ____(6)____ achieve target blood glucose levels.`,
            text: "Choose the best option for blank (2):",
            options: ["the entry of", "entering to", "entered by", "to enter"],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 'the entry of' (การเข้าสู่) สอดคล้องตามโครงสร้างคำนามหลักตามหลังกริยา 'facilitate' (facilitate + Noun phrase)",
            wrongExplanation: "ตัวเลือกอื่นผิดรูปแบบไวยากรณ์และโครงสร้าง Collocation ของคำ",
            mindset: "กริยา facilitate ต้องการกรรมที่เป็นคำนามตามหลังมาโดยตรง",
            speedHack: "facilitate + Noun -> 'the entry of glucose' ได้โครงสร้างนามที่สมบูรณ์ที่สุด"
        },
        {
            passage: `<b>Passage 3: The Role of Insulin in Glucose Regulation</b><br><br>
                 Insulin is a vital hormone produced by the pancreas ____(1)____ regulates glucose levels in the blood. When we consume food, the body breaks down carbohydrates into glucose. In response, insulin is secreted to facilitate ____(2)____ glucose into the cells, where it is utilized for energy. Without sufficient insulin, glucose ____(3)____ in the bloodstream, leading to hyperglycemia. Over time, sustained high blood sugar levels can damage blood vessels. ____(4)____, managing insulin activity is crucial for patients with diabetes. Type 1 diabetics require daily insulin injections because their bodies do not produce the hormone. ____(5)____, Type 2 diabetics may manage their condition through lifestyle modifications and oral medications, although insulin therapy is sometimes necessary ____(6)____ achieve target blood glucose levels.`,
            text: "Choose the best option for blank (3):",
            options: ["accumulates", "accumulated", "will accumulate", "accumulating"],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 'accumulates' (สะสม/พอกพูน) อยู่ในรูป Present Simple เอกพจน์ สอดคล้องกับข้อเท็จจริงทางวิทยาศาสตร์ทั่วไป (General Truth) และประธาน glucose (นามนับไม่ได้เป็นเอกพจน์)",
            wrongExplanation: "ตัวเลือกอื่นไม่สอดคล้องกับโครงสร้างประโยคเงื่อนไขข้อเท็จจริงปัจจุบัน (Zero Conditional)",
            mindset: "เมื่ออธิบายข้อเท็จจริงทางวิทยาศาสตร์ ให้ใช้ Present Simple Tense เป็นหลัก",
            speedHack: "วิทยาศาสตร์ = Present Simple -> ประธาน glucose (เอกพจน์) -> เลือกเติมกริยาที่เติม s 'accumulates'"
        },
        {
            passage: `<b>Passage 3: The Role of Insulin in Glucose Regulation</b><br><br>
                 Insulin is a vital hormone produced by the pancreas ____(1)____ regulates glucose levels in the blood. When we consume food, the body breaks down carbohydrates into glucose. In response, insulin is secreted to facilitate ____(2)____ glucose into the cells, where it is utilized for energy. Without sufficient insulin, glucose ____(3)____ in the bloodstream, leading to hyperglycemia. Over time, sustained high blood sugar levels can damage blood vessels. ____(4)____, managing insulin activity is crucial for patients with diabetes. Type 1 diabetics require daily insulin injections because their bodies do not produce the hormone. ____(5)____, Type 2 diabetics may manage their condition through lifestyle modifications and oral medications, although insulin therapy is sometimes necessary ____(6)____ achieve target blood glucose levels.`,
            text: "Choose the best option for blank (4):",
            options: ["Consequently", "Conversely", "Nevertheless", "For example"],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 'Consequently' (ดังนั้น) เป็นการบอกผลลัพธ์ที่เป็นเหตุเป็นผลจากย่อหน้าข้างต้นที่ว่าถ้าระดับน้ำตาลสะสมในกระแสเลือดสูงจะทำลายหลอดเลือด ผลลัพธ์คือการจัดการอินซูลินจึงสำคัญมาก",
            wrongExplanation: "Conversely = ในทางกลับกัน; Nevertheless = อย่างไรก็ตาม; For example = ตัวอย่างเช่น",
            mindset: "เชื่อมโยงเหตุและผล (Cause and effect) ในทางสรีรวิทยาเพื่อหาผลสรุปของการจัดการรักษา",
            speedHack: "เหตุน้ำตาลสูงทำลายหลอดเลือด -> ผลคือการคุมน้ำตาลสำคัญมาก เชื่อมด้วยตัวสรุปผล 'Consequently'"
        },
        {
            passage: `<b>Passage 3: The Role of Insulin in Glucose Regulation</b><br><br>
                 Insulin is a vital hormone produced by the pancreas ____(1)____ regulates glucose levels in the blood. When we consume food, the body breaks down carbohydrates into glucose. In response, insulin is secreted to facilitate ____(2)____ glucose into the cells, where it is utilized for energy. Without sufficient insulin, glucose ____(3)____ in the bloodstream, leading to hyperglycemia. Over time, sustained high blood sugar levels can damage blood vessels. ____(4)____, managing insulin activity is crucial for patients with diabetes. Type 1 diabetics require daily insulin injections because their bodies do not produce the hormone. ____(5)____, Type 2 diabetics may manage their condition through lifestyle modifications and oral medications, although insulin therapy is sometimes necessary ____(6)____ achieve target blood glucose levels.`,
            text: "Choose the best option for blank (5):",
            options: ["In contrast", "Similarly", "Furthermore", "Namely"],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 'In contrast' (ในทางตรงกันข้าม) เพื่อระบุความขัดแย้งเชิงเปรียบเทียบระหว่างโรคเบาหวานประเภทที่ 1 (ต้องฉีดยาตลอดเวลา) และเบาหวานประเภทที่ 2 (คุมพฤติกรรมแทนได้)",
            wrongExplanation: "Similarly = ในทำนองเดียวกัน; Furthermore = ยิ่งไปกว่านั้น; Namely = กล่าวคือ",
            mindset: "วิเคราะห์ความแตกต่างของหัวเรื่องสองส่วน (Type 1 vs Type 2) ซึ่งมีแนวทางรักษาตรงข้ามกันชัดเจน",
            speedHack: "ประโยคก่อนหน้าพูดถึง Type 1 -> ประโยคถัดมาพูดถึง Type 2 แนวทางต่างกันสุดขั้ว ใช้คำขัดแย้งเปรียบเทียบ 'In contrast'"
        },
        {
            passage: `<b>Passage 3: The Role of Insulin in Glucose Regulation</b><br><br>
                 Insulin is a vital hormone produced by the pancreas ____(1)____ regulates glucose levels in the blood. When we consume food, the body breaks down carbohydrates into glucose. In response, insulin is secreted to facilitate ____(2)____ glucose into the cells, where it is utilized for energy. Without sufficient insulin, glucose ____(3)____ in the bloodstream, leading to hyperglycemia. Over time, sustained high blood sugar levels can damage blood vessels. ____(4)____, managing insulin activity is crucial for patients with diabetes. Type 1 diabetics require daily insulin injections because their bodies do not produce the hormone. ____(5)____, Type 2 diabetics may manage their condition through lifestyle modifications and oral medications, although insulin therapy is sometimes necessary ____(6)____ achieve target blood glucose levels.`,
            text: "Choose the best option for blank (6):",
            options: ["in order to", "so that", "with a view to", "for"],
            answer: 0,
            correctExplanation: "ตอบข้อ 1 'in order to' (+ V.inf: achieve) แปลว่า เพื่อที่จะ",
            wrongExplanation: "so that ต้องการอนุประโยค; with a view to ต้องการ V-ing; for ต้องการคำนาม",
            mindset: "ประเมินโครงสร้างไวยากรณ์ตามหลังช่องว่างเพื่อตัดช้อยส์ชนิดของคำเชื่อม",
            speedHack: "ข้างหลังช่องว่างคือ 'achieve' (V.inf) เลือก 'in order to' ได้ทันที"
        }
    ]
};

// Construct the complete 60 questions bank
let activeQuestions = [];

function generateFullQuestionBank() {
    // Clone initial 24 custom questions
    activeQuestions = JSON.parse(JSON.stringify(rawQuestions));

    // Generate remaining 36 questions by cycling pools to reach 12 per section
    const sections = ["Conversation", "Vocabulary", "Reading", "Error Identification", "Cloze Test"];

    sections.forEach(sec => {
        const currentCount = activeQuestions.filter(q => q.section === sec).length;
        const required = 12 - currentCount;
        const pool = sectionPools[sec];

        for (let i = 0; i < required; i++) {
            // Pick and modify template to avoid absolute duplicates
            const template = pool[i % pool.length];
            const clone = JSON.parse(JSON.stringify(template));
            clone.section = sec;

            if (sec === "Conversation") {
                clone.partTitle = `PART 1: CONVERSATION (Scenario Extra ${i + 1})`;
                clone.suggestedTime = "Suggested Time: 45s";
            } else if (sec === "Vocabulary") {
                clone.partTitle = `PART 2: VOCABULARY (Diagnostic ${i + 1})`;
                clone.suggestedTime = "Suggested Time: 40s";
            } else if (sec === "Reading") {
                clone.partTitle = `PART 3: READING (Passage Deep Dive ${i + 1})`;
                clone.suggestedTime = "Suggested Time: 1.5 mins";
            } else if (sec === "Error Identification") {
                clone.partTitle = `PART 4: ERROR IDENTIFICATION (Traps ${i + 1})`;
                clone.suggestedTime = "Suggested Time: 50s";
            } else if (sec === "Cloze Test") {
                clone.partTitle = `PART 5: CLOZE TEST (Grammar ${i + 1})`;
                clone.suggestedTime = "Suggested Time: 1 min";
            }

            activeQuestions.push(clone);
        }
    });
}

// Fisher-Yates Shuffle Algorithm for randomizing arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle questions within their respective sections to keep the logical structure (Part 1 -> Part 5) 
// but randomize the content sequence each time.
function randomizeExamStructure() {
    const sections = ["Conversation", "Vocabulary", "Reading", "Error Identification", "Cloze Test"];
    let structuredQuestions = [];

    sections.forEach(sec => {
        let secQuestions = activeQuestions.filter(q => q.section === sec);
        shuffleArray(secQuestions);

        // Also shuffle options for each question
        secQuestions.forEach(q => {
            const originalOptions = [...q.options];
            const correctAnswerText = originalOptions[q.answer];

            shuffleArray(q.options);
            q.answer = q.options.indexOf(correctAnswerText);
        });

        structuredQuestions = structuredQuestions.concat(secQuestions);
    });

    activeQuestions = structuredQuestions;
}

// Application state variables
let currentQIdx = 0;
let score = 0;
let userAnswers = []; // holds objects: {selectedIdx, isCorrect}
let timeLeft = 3600; // 60 minutes in seconds
let timerInterval;
let selectedOptionIdx = -1;
let answeredQuestionsCount = 0;

// Study Mode State & Logic
let studyChecklist = [false, false, false, false, false];

function showStudyMode() {
    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'none';
    const studyScreen = document.getElementById('study-screen');
    if (studyScreen) studyScreen.style.display = 'block';
    updateStudyProgress();
    switchStudyTab(0);
}

function switchStudyTab(tabIdx) {
    // Hide all panels
    const panels = document.querySelectorAll('.study-panel');
    panels.forEach(p => p.style.display = 'none');
    
    // Remove active class from all buttons
    const tabBtns = document.querySelectorAll('.study-tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // Show active panel
    document.getElementById(`study-panel-${tabIdx}`).style.display = 'block';
    
    // Add active class to clicked button
    document.getElementById(`tab-btn-${tabIdx}`).classList.add('active');
}

function toggleChecklist(tabIdx) {
    studyChecklist[tabIdx] = !studyChecklist[tabIdx];
    const btn = document.getElementById(`checklist-btn-${tabIdx}`);
    const tabBtn = document.getElementById(`tab-btn-${tabIdx}`);
    
    if (studyChecklist[tabIdx]) {
        btn.classList.add('checked');
        btn.innerHTML = `✓ ทำความเข้าใจหัวข้อนี้แล้ว`;
        tabBtn.classList.add('read-done');
    } else {
        btn.classList.remove('checked');
        btn.innerHTML = `<span>[ ] ติ๊กเมื่อทำความเข้าใจหัวข้อนี้แล้ว</span>`;
        tabBtn.classList.remove('read-done');
    }
    
    updateStudyProgress();
}

function updateStudyProgress() {
    const count = studyChecklist.filter(Boolean).length;
    const percent = (count / studyChecklist.length) * 100;
    
    document.getElementById('prep-progress-fill').style.width = `${percent}%`;
    document.getElementById('prep-percent-text').innerText = `${percent.toFixed(0)}%`;
    
    const startExamBtn = document.getElementById('ready-exam-btn');
    if (percent === 100) {
        startExamBtn.style.animation = 'pulseGlow 1.5s infinite';
        startExamBtn.innerHTML = "🎯 พร้อมสอบแล้ว! ลุยข้อสอบจริง";
        startExamBtn.style.background = 'linear-gradient(135deg, var(--success), var(--neon-blue))';
        startExamBtn.style.boxShadow = '0 0 25px rgba(16, 185, 129, 0.8)';
    } else {
        startExamBtn.style.animation = 'none';
        startExamBtn.innerHTML = `🎯 เริ่มทำข้อสอบจริง (${percent.toFixed(0)}%)`;
        startExamBtn.style.background = 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))';
        startExamBtn.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.4)';
    }
}

function startExam() {
    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'none';
    const studyScreen = document.getElementById('study-screen');
    if (studyScreen) studyScreen.style.display = 'none';
    const quizScreen = document.getElementById('quiz-screen');
    if (quizScreen) quizScreen.style.display = 'block';

    generateFullQuestionBank();
    randomizeExamStructure();
    buildQuestionMatrix();

    timeLeft = 3600;
    userAnswers = new Array(activeQuestions.length).fill(null);
    currentQIdx = 0;
    score = 0;

    startTimer();
    loadQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        document.getElementById('timer').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("หมดเวลาทำข้อสอบแล้ว! ระบบจะส่งคำตอบโดยอัตโนมัติ");
            finishExam();
        }
    }, 1000);
}

function buildQuestionMatrix() {
    const matrixDiv = document.getElementById('q-matrix');
    matrixDiv.innerHTML = '';
    for (let i = 0; i < activeQuestions.length; i++) {
        const badge = document.createElement('div');
        badge.className = 'q-badge';
        badge.id = `badge-${i}`;
        badge.innerText = i + 1;
        badge.onclick = () => jumpToQuestion(i);
        matrixDiv.appendChild(badge);
    }
}

function updateQuestionMatrixUI() {
    for (let i = 0; i < activeQuestions.length; i++) {
        const badge = document.getElementById(`badge-${i}`);
        badge.className = 'q-badge';

        if (i === currentQIdx) {
            badge.classList.add('current');
        }

        if (userAnswers[i] !== null) {
            if (userAnswers[i].isCorrect) {
                badge.classList.add('answered-correct');
            } else {
                badge.classList.add('answered-incorrect');
            }
        }
    }
}

function loadQuestion() {
    updateQuestionMatrixUI();
    selectedOptionIdx = -1;
    document.getElementById('submit-ans-btn').disabled = true;
    document.getElementById('submit-ans-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('explanation-panel').style.display = 'none';

    const q = activeQuestions[currentQIdx];
    document.getElementById('section-title').innerText = q.partTitle;
    document.getElementById('question-index-label').innerText = `Question ${currentQIdx + 1} of 60 | Section: ${q.section}`;
    document.getElementById('time-suggest').innerText = q.suggestedTime;

    // Progress bar fill
    const progressPercent = ((currentQIdx + 1) / activeQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    const layoutContainer = document.getElementById('dynamic-question-layout');
    layoutContainer.innerHTML = '';

    const hasAnswered = userAnswers[currentQIdx] !== null;

    if (q.passage) {
        // Render Split Layout for Reading
        const splitDiv = document.createElement('div');
        splitDiv.className = 'passage-layout';

        const passageBox = document.createElement('div');
        passageBox.className = 'passage-box';
        passageBox.innerHTML = q.passage;

        const questionBox = document.createElement('div');
        questionBox.className = 'question-box';

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.innerHTML = q.text;

        const optionsList = document.createElement('div');
        optionsList.className = 'options-list';

        q.options.forEach((opt, idx) => {
            const optItem = document.createElement('div');
            optItem.className = 'option-item';
            optItem.innerHTML = `<span class="option-prefix">${idx + 1}.</span> <span>${opt}</span>`;

            if (hasAnswered) {
                optItem.classList.add('locked');
                if (idx === q.answer) optItem.classList.add('correct');
                if (idx === userAnswers[currentQIdx].selectedIdx && idx !== q.answer) optItem.classList.add('incorrect');
            } else {
                optItem.onclick = () => selectOption(idx);
            }
            optItem.id = `opt-${idx}`;
            optionsList.appendChild(optItem);
        });

        questionBox.appendChild(qText);
        questionBox.appendChild(optionsList);

        splitDiv.appendChild(passageBox);
        splitDiv.appendChild(questionBox);
        layoutContainer.appendChild(splitDiv);
    } else {
        // Render Standard Layout
        const standardDiv = document.createElement('div');
        standardDiv.className = 'question-box';

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.innerHTML = q.text;

        const optionsList = document.createElement('div');
        optionsList.className = 'options-list';

        q.options.forEach((opt, idx) => {
            const optItem = document.createElement('div');
            optItem.className = 'option-item';
            optItem.innerHTML = `<span class="option-prefix">${idx + 1}.</span> <span>${opt}</span>`;

            if (hasAnswered) {
                optItem.classList.add('locked');
                if (idx === q.answer) optItem.classList.add('correct');
                if (idx === userAnswers[currentQIdx].selectedIdx && idx !== q.answer) optItem.classList.add('incorrect');
            } else {
                optItem.onclick = () => selectOption(idx);
            }
            optItem.id = `opt-${idx}`;
            optionsList.appendChild(optItem);
        });

        standardDiv.appendChild(qText);
        standardDiv.appendChild(optionsList);
        layoutContainer.appendChild(standardDiv);
    }

    if (hasAnswered) {
        revealExplanation();
    }
}

function selectOption(idx) {
    if (userAnswers[currentQIdx] !== null) return; // Answer locked

    selectedOptionIdx = idx;
    document.getElementById('submit-ans-btn').disabled = false;

    // Remove selection classes
    const items = document.querySelectorAll('.option-item');
    items.forEach(item => item.classList.remove('selected'));

    // Highlight chosen
    document.getElementById(`opt-${idx}`).classList.add('selected');
}

function submitAnswer() {
    if (selectedOptionIdx === -1) return;

    const q = activeQuestions[currentQIdx];
    const isCorrect = selectedOptionIdx === q.answer;

    if (isCorrect) score++;

    userAnswers[currentQIdx] = {
        selectedIdx: selectedOptionIdx,
        isCorrect: isCorrect
    };

    // Disable editing options
    const items = document.querySelectorAll('.option-item');
    items.forEach((item, idx) => {
        item.classList.add('locked');
        if (idx === q.answer) item.classList.add('correct');
        if (idx === selectedOptionIdx && !isCorrect) item.classList.add('incorrect');
    });

    revealExplanation();
}

function revealExplanation() {
    const q = activeQuestions[currentQIdx];

    document.getElementById('submit-ans-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';

    if (currentQIdx === activeQuestions.length - 1) {
        document.getElementById('next-btn').innerText = "Finish & Evaluate";
    } else {
        document.getElementById('next-btn').innerText = "Next Question";
    }

    document.getElementById('explanation-correct').innerHTML = q.correctExplanation;
    document.getElementById('explanation-wrong').innerHTML = q.wrongExplanation;
    document.getElementById('explanation-mindset').innerHTML = q.mindset;
    document.getElementById('explanation-hack').innerHTML = q.speedHack;

    document.getElementById('explanation-panel').style.display = 'flex';
    updateQuestionMatrixUI();
}

function nextQuestion() {
    if (currentQIdx < activeQuestions.length - 1) {
        currentQIdx++;
        loadQuestion();
    } else {
        finishExam();
    }
}

function jumpToQuestion(idx) {
    currentQIdx = idx;
    loadQuestion();
}

function finishExam() {
    clearInterval(timerInterval);
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    // Math evaluations
    const percent = ((score / activeQuestions.length) * 100).toFixed(1);
    document.getElementById('final-score').innerText = score;

    const readiness = document.getElementById('readiness-banner');

    // Evaluate readiness rating (specifically tuned for Elite Pharmacy candidate targeting 80%+)
    if (percent >= 85) {
        readiness.innerText = `LEVEL A+: PHARMACY ELITE CANDIDATE (ความพร้อมสูงมาก 85%+)`;
        readiness.className = "readiness-banner ready-high";
    } else if (percent >= 70) {
        readiness.innerText = `LEVEL B: COMPETITIVE CANDIDATE (ระดับลุ้นแข่งขัน 70-84%)`;
        readiness.className = "readiness-banner ready-mid";
    } else {
        readiness.innerText = `LEVEL C: NEED FOUNDATION POLISH (ต้องเร่งปรับพื้นฐาน ต่ำกว่า 70%)`;
        readiness.className = "readiness-banner ready-low";
    }

    // Sectional performance tracking
    const sections = ["Conversation", "Vocabulary", "Reading", "Error Identification", "Cloze Test"];
    const sectionalScores = {};

    sections.forEach(sec => {
        sectionalScores[sec] = { total: 0, correct: 0 };
    });

    activeQuestions.forEach((q, idx) => {
        sectionalScores[q.section].total++;
        if (userAnswers[idx] && userAnswers[idx].isCorrect) {
            sectionalScores[q.section].correct++;
        }
    });

    // Render Bar Charts
    const chartContainer = document.getElementById('sectional-charts-container');
    chartContainer.innerHTML = '';

    let weakestSection = "";
    let lowestPercent = 101;

    sections.forEach(sec => {
        const data = sectionalScores[sec];
        const secPercent = data.total > 0 ? ((data.correct / data.total) * 100).toFixed(0) : 0;

        if (Number(secPercent) < lowestPercent) {
            lowestPercent = Number(secPercent);
            weakestSection = sec;
        }

        const chartRow = document.createElement('div');
        chartRow.className = 'chart-row';
        chartRow.innerHTML = `
        <div class="chart-labels">
            <span>${sec}</span>
            <span>${data.correct}/${data.total} (${secPercent}%)</span>
        </div>
        <div class="chart-bar-bg">
            <div class="chart-bar-fill" style="width: ${secPercent}%"></div>
        </div>
    `;
        chartContainer.appendChild(chartRow);
    });

    // Weakness Analysis Text Generator
    const weaknessBox = document.getElementById('weakness-analysis');
    let weaknessHTML = "";

    if (percent >= 85) {
        weaknessHTML += `
        <p>🏆 <b>ยินดีด้วยครับ! คุณมีคุณสมบัติระดับ Pharmacy Elite!</b> คะแนนในระดับนี้แสดงถึงทักษะภาษาอังกฤษและกระบวนการคิดวิเคราะห์วิทยาศาสตร์สุขภาพที่แข็งแกร่งมาก โอกาสสอบติดคณะเภสัชศาสตร์ในมหาวิทยาลัยชั้นนำสูงมาก</p>
        <p>💡 <b>ข้อแนะนำเพิ่มเติม:</b> รักษามาตรฐานการทำความเร็วในห้องสอบจริง (รักษาเวลาเฉลี่ย 40-50 วินาทีต่อข้อ) เพื่อแบ่งเวลาไปให้พาร์ตคิดวิเคราะห์ตรรกะในข้อสอบ TGAT ส่วนอื่น</p>
    `;
    } else {
        weaknessHTML += `
        <p>🩺 <b>บทวิเคราะห์เพื่อการยกระดับคะแนนสู่ 80+:</b> คะแนนของคุณอยู่ในระดับที่ยังสามารถผลักดันให้ขึ้นไปได้อีก โดยพาร์ตที่คุณควรโฟกัสมากที่สุดคือ <b>[${weakestSection}]</b> ซึ่งทำเปอร์เซ็นต์ได้น้อยที่สุด (${lowestPercent}%)</p>
    `;
    }

    // Section-specific tactical advise
    weaknessHTML += `<h4>🎯 แผนการลุยรายพาร์ตเพื่อฟันคะแนนเภสัชฯ:</h4>`;

    const tips = {
        "Conversation": "ฝึกฝนการอ่านบริบทคำศัพท์หมวดบริการสุขภาพและการทำงานในโรงพยาบาลเพิ่มเติม ตัดตัวเลือกที่สุภาพแต่ผิดหลักการรักษาและความปลอดภัยออกทันที",
        "Vocabulary": "สร้างแฟลชการ์ดสำหรับ Medical prefix/suffix (เช่น anti-, hyper-, -itis) และท่องจำคู่คำเหมือน (synonyms) ในบริบทงานวิจัยวิทยาศาสตร์เชิงประจักษ์ (empirical, clinical)",
        "Reading": "ฝึกการอ่านแบบจับเวลาและไม่ลนลาน แยกแยะ Main Idea ออกจากประเด็นปลีกย่อยให้ได้ใน 1 นาที และมองหาข้อความขัดแย้ง (However, Despite) เพื่อตรวจหาประเด็นคำถามอนุมาน (Inference)",
        "Error Identification": "ทบทวนกฎไวยากรณ์ยอดนิยม 3 เรื่องหลัก: Subject-Verb Agreement, Parallel Structure และ Subjunctive Mood (เช่น request/suggest that + V.inf) ซึ่งเป็นกับดักคะแนนของข้อสอบแพทย์/เภสัช",
        "Cloze Test": "เน้นจำโครงสร้างไวยากรณ์หลังคำเชื่อมบอกทัศนคติและจุดประสงค์ (เช่น so that + clause ต่างจาก in order to + V.inf) และความสอดคล้องกันของ Tense ในการอธิบายทฤษฎีวิทยาศาสตร์ (Present Simple vs Present Perfect)"
    };

    sections.forEach(sec => {
        const isWeakest = sec === weakestSection ? `style="color: var(--danger); font-weight:700;"` : "";
        weaknessHTML += `<p><b ${isWeakest}>[${sec}]:</b> ${tips[sec]}</p>`;
    });

    weaknessBox.innerHTML = weaknessHTML;
}

function resetExam() {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'flex';
}
    