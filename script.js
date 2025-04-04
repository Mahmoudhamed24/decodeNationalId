// قائمة بأسماء المحافظات بناءً على الكود
const governorates = {
    "01": "القاهرة",
    "02": "الإسكندرية",
    "03": "بورسعيد",
    "04": "السويس",
    "11": "دمياط",
    "12": "الدقهلية",
    "13": "الشرقية",
    "14": "القليوبية",
    "15": "كفر الشيخ",
    "16": "الغربية",
    "17": "المنوفية",
    "18": "البحيرة",
    "19": "الإسماعيلية",
    "21": "الجيزة",
    "22": "بني سويف",
    "23": "الفيوم",
    "24": "المنيا",
    "25": "أسيوط",
    "26": "سوهاج",
    "27": "قنا",
    "28": "أسوان",
    "29": "الأقصر",
    "31": "البحر الأحمر",
    "32": "الوادي الجديد",
    "33": "مطروح",
    "34": "شمال سيناء",
    "35": "جنوب سيناء",
    "88": "خارج الجمهورية"
};

function decodeNationalId() {
    const nationalId = document.getElementById("nationalId").value;
    const outputDiv = document.getElementById("output");

    // مسح النتائج السابقة
    outputDiv.innerHTML = "";

    // التحقق من صحة الإدخال
    if (nationalId.length !== 14 || isNaN(nationalId)) {
        outputDiv.innerHTML = '<div class="error">الرجاء إدخال رقم قومي صحيح مكون من 14 رقمًا.</div>';
        return;
    }

    // استخراج البيانات
    const century = nationalId[0] === "2" ? "19" : "20"; // القرن
    const year = nationalId.substring(1, 3); // السنة
    const month = nationalId.substring(3, 5); // الشهر
    const day = nationalId.substring(5, 7); // اليوم
    const governorateCode = nationalId.substring(7, 9); // كود المحافظة
    const genderDigit = parseInt(nationalId[13], 10); // الرقم الأخير

    // تحديد الجنس
    const gender = genderDigit % 2 === 1 ? "أنثى" : "ذكر";

    // تحديد اسم المحافظة
    const governorateName = governorates[governorateCode] || "غير معروفة";

    // عرض النتائج
    outputDiv.innerHTML = `
        <div class="result">
            <p><strong>الجنس:</strong> ${gender}</p>
            <p><strong>تاريخ الميلاد:</strong> ${day}-${month}-${century}${year}</p>
            <p><strong>المحافظة:</strong> ${governorateName}</p>
        </div>
    `;
}