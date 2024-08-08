// Viết hàm checkAge để kiểm tra tuổi của người dùng. Nếu tuổi từ 18 trở lên, hàm trả về "Người lớn"; ngược lại, trả về "Vị thành niên".

function checkAge(age) {
  return age >= 18 ? "Người lớn" : "Vị thành niên";
}

// Viết hàm calculateShipping để tính phí vận chuyển dựa trên khoảng cách. Phí cố định là 5000đ cho 5km đầu, và 1000đ cho mỗi km tiếp theo.

function calculateShipping(distance) {
  return distance <= 5 ? 5000 : 5000 + (distance - 5) * 1000;
}

// Viết hàm classifyStudent để phân loại sinh viên dựa vào điểm trung bình: trên 8 là “Giỏi”, từ 6 đến 8 là “Khá”, dưới 6 là “Trung bình”.

function classifyStudent(score) {
  if (score > 8) {
    return "Giỏi";
  } else if (score >= 6) {
    return "Khá";
  } else {
    return "Trung bình";
  }
}

// sử dụng ES6
// Viết hàm gradeExam để phân loại điểm thi, hàm nhận vào điểm số của một bài thi. Nếu điểm từ 90 trở lên là “Xuất sắc”, từ 80 đến 89 là “Giỏi”, từ 70 đến 79 là “Khá”, từ 60 đến 69 là “Trung bình”, và dưới 60 là “Yếu”.

const gradeExam = (score) => {
  if (score >= 90) {
    return "Xuất sắc";
  } else if (score >= 80) {
    return "Giỏi";
  } else if (score >= 70) {
    return "Khá";
  } else if (score >= 60) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
};

// Viết hàm calculateDiscount nhận vào tổng số tiền mua hàng. Nếu số tiền trên 1000, giảm 15%; từ 500 đến 1000, giảm 10%; dưới 500, không giảm giá.

const calculateDiscount = (total) => {
  if (total > 1000) {
    return total * 0.85;
  } else if (total >= 500) {
    return total * 0.9;
  } else {
    return total;
  }
};

// Viết hàm convertNumberToMonth nhận vào một số nguyên từ 1 đến 12 và trả về tên của tháng tương ứng bằng tiếng Việt. Ví dụ, nếu nhận vào số 1, hàm sẽ trả về "Tháng một". Trường hợp khác, trả về "Tháng không hợp lệ".

const convertNumberToMonth = (number) => {
  switch (number) {
    case 1:
      return "Tháng một";
    case 2:
      return "Tháng hai";
    case 3:
      return "Tháng ba";
    case 4:
      return "Tháng tư";
    case 5:
      return "Tháng năm";
    case 6:
      return "Tháng sáu";
    case 7:
      return "Tháng bảy";
    case 8:
      return "Tháng tám";
    case 9:
      return "Tháng chín";
    case 10:
      return "Tháng mười";
    case 11:
      return "Tháng mười một";
    case 12:
      return "Tháng mười hai";
    default:
      return "Tháng không hợp lệ";
  }
};

// Tạo hàm simpleCalculator để thực hiện các phép tính cơ bản. Hàm sẽ nhận vào ba tham số:

// operator: một chuỗi chỉ định phép tính ('+', '-', '*', '/')
// a và b: hai số cần tính toán
// Hãy sử dụng cấu trúc switch-case để xử lý các phép tính dựa trên operator, ngoài ra:

// Nếu b bằng 0 khi thực hiện phép chia, trả về: "Không thể chia cho 0".
// Nếu operator nằm ngoài các phép tính trên, trả về "Phép tính không hợp lệ".

const simpleCalculator = (operator, a, b) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Không thể chia cho 0" : a / b;
    default:
      return "Phép tính không hợp lệ";
  }
};

// Tạo hàm identifyFruit để xác định loại quả dựa trên màu sắc. Hàm sẽ nhận vào một tham số color, là màu sắc của quả. Dựa vào màu sắc, hãy trả về tên của loại quả theo các quy tắc sau:

// Màu đỏ hoặc hồng: “Táo”
// Màu vàng: “Chuối”
// Màu tím: “Nho”
// Màu cam hoặc màu xanh: “Cam”
// Sử dụng kỹ thuật fallthrough trong cấu trúc switch-case để vượt qua thử thách.

const identifyFruit = (color) => {
  switch (color) {
    case "đỏ":
    case "hồng":
      return "Táo";
    case "vàng":
      return "Chuối";
    case "tím":
      return "Nho";
    case "cam":
    case "xanh":
      return "Cam";
    default:
      return "Không xác định";
  }
};

// Tạo một hàm gradeStudent để xếp loại học sinh dựa trên điểm số. Hàm này sẽ nhận vào một tham số score là điểm số của học sinh (một số từ 0 đến 100). Hàm sẽ trả về xếp loại dựa trên các khoảng điểm sau:

// Từ 90 trở lên: “Xuất sắc”
// 80 đến 89: “Giỏi”
// 70 đến 79: “Khá”
// 60 đến 69: “Trung bình”
// Dưới 60: “Yếu”

const gradeStudent = (score) => {
  switch (true) {
    case score >= 90:
      return "Xuất sắc";
    case score >= 80:
      return "Giỏi";
    case score >= 70:
      return "Khá";
    case score >= 60:
      return "Trung bình";
    default:
      return "Yếu";
  }
};

// Viết hàm isSchoolAge(age) để kiểm tra xem một người có nằm trong độ tuổi đi học (từ 6 đến 18 tuổi) hay không.

const isSchoolAge = (age) => age >= 6 && age <= 18;

// Viết hàm isHealthy(heartRate, temperature) để kiểm tra sức khỏe. Một người được coi là khỏe mạnh nếu nhịp tim từ 60 đến 100 lần/phút và nhiệt độ cơ thể từ 36.5 đến 37.5 độ C.

const isHealthy = (heartRate, temperature) =>
  heartRate >= 60 &&
  heartRate <= 100 &&
  temperature >= 36.5 &&
  temperature <= 37.5;

// Viết hàm canAttendTechSeminar(age, isITEmployee, hasRegistered) kiểm tra xem một người có đủ điều kiện tham gia hội thảo công nghệ. Điều kiện bao gồm: tuổi trên 18, là nhân viên IT, và đã đăng ký online.

const canAttendTechSeminar = (age, isITEmployee, hasRegistered) =>
  age > 18 && isITEmployee && hasRegistered;

// Viết hàm canPurchaseCarInsurance(age, hasLicense, noAccidents) kiểm tra xem một người có thể mua bảo hiểm xe không. Điều kiện: trên 21 tuổi, có giấy phép lái xe và không có hồ sơ tai nạn trong quá khứ.
// Viết hàm canJoinFootballTeam(age, hasExperience) kiểm tra xem một người có được tham gia đội bóng không. Điều kiện: tuổi từ 18 đến 35 và có kinh nghiệm chơi bóng.
// Viết hàm isBankAccountValid(isIdentityVerified, balance) kiểm tra xem tài khoản ngân hàng có hợp lệ. Điều kiện: đã xác minh danh tính và số dư tài khoản trên 100 đô.
// Viết hàm canParticipateInMarathon(age, hasTrained) kiểm tra xem một người có thể tham gia giải chạy bộ. Điều kiện: tuổi từ 18 trở lên và đã tập luyện.
// Viết hàm canEnrollCookingClass(lovesCooking, noFoodAllergies) kiểm tra xem một người có thể tham gia khóa học nấu ăn. Điều kiện: yêu thích nấu ăn và không bị dị ứng thực phẩm.

const canPurchaseCarInsurance = (age, hasLicense, noAccidents) =>
  age > 21 && hasLicense && noAccidents;

const canJoinFootballTeam = (age, hasExperience) =>
  age >= 18 && age <= 35 && hasExperience;

const isBankAccountValid = (isIdentityVerified, balance) =>
  isIdentityVerified && balance > 100;

const canParticipateInMarathon = (age, hasTrained) => age >= 18 && hasTrained;

const canEnrollCookingClass = (lovesCooking, noFoodAllergies) =>
  lovesCooking && noFoodAllergies;

// Viết hàm canOrganizeMusicFestival để đánh giá khả năng tổ chức một lễ hội âm nhạc. Điều kiện: số lượng ban nhạc ít nhất là 5, có đủ ngân sách quảng cáo, và dự báo thời tiết không có mưa.
// Viết hàm canOpenNewStore để đánh giá khả năng mở cửa hàng mới. Điều kiện:
// Địa điểm tốt hoặc ngân sách quảng cáo cao, và:
// Phải có ít nhất 3 nhân viên có kinh nghiệm.
// Viết hàm isCapableProjectManager để xác định một người có đủ năng lực quản lý dự án hay không. Điều kiện: kinh nghiệm ít nhất 3 năm, hiểu biết về công nghệ, và có kỹ năng giao tiếp tốt. Đáp ứng tất cả các yếu tố mới đủ điều kiện.
// Viết hàm canJoinExchangeProgram để kiểm tra xem một sinh viên có đủ điều kiện tham gia chương trình trao đổi học thuật. Điều kiện:
// Điểm trung bình trên 8.0 hoặc có sự giới thiệu từ giáo viên, và:
// Không có vi phạm kỷ luật.
// Viết hàm planSportsEvent để quyết định việc tổ chức một sự kiện thể thao. Điều kiện: chỉ tổ chức nếu có ít nhất 50 người tham gia, ngân sách dưới 10000, và không trùng với ngày lễ. Nếu các điều kiện không đủ, hãy hoãn sự kiện.

const canOrganizeMusicFestival = (numBands, hasBudget, isSunny) =>
  numBands >= 5 && hasBudget && isSunny;

const canOpenNewStore = (goodLocation, highAdBudget, numExperiencedEmployees) =>
  (goodLocation || highAdBudget) && numExperiencedEmployees >= 3;

const isCapableProjectManager = (
  experience,
  techKnowledge,
  communicationSkills
) => experience >= 3 && techKnowledge && communicationSkills;

const canJoinExchangeProgram = (
  gpa,
  teacherRecommendation,
  noDisciplineViolations
) => (gpa > 8 || teacherRecommendation) && noDisciplineViolations;

const planSportsEvent = (numParticipants, budget, isHoliday) =>
  numParticipants >= 50 && budget < 10000 && !isHoliday;

// Viết hàm investmentDecision để quyết định xem có nên đầu tư vào một dự án không. Đầu tư nếu dự án có rủi ro thấp hoặc trung bình và ROI (Return on Investment) dự kiến trên 10%, hoặc nếu dự án có rủi ro cao nhưng ROI trên 20%.
/**
 * 1. Determines whether to invest in a project based on risk and expected ROI.
 * @param {string} riskLevel - The risk level of the investment, which can be "high", "medium", or "low".
 */

// Hàm cần trả về true khi rủi ro trung bình và ROI trên 10%: expected 'Do not invest' to equal true

const investmentDecision = (riskLevel, expectedROI) =>
  (riskLevel === "low" || riskLevel === "medium") && expectedROI > 10;

// Viết hàm determineTravelPlan để xác định kế hoạch du lịch dựa trên thời tiết, ngân sách, và sở thích cá nhân. Nếu thời tiết tốt, ngân sách từ 5000 trở lên và thích phiêu lưu, chọn “Du lịch núi”; nếu không thích phiêu lưu, chọn “Du lịch biển”. Nếu ngân sách nhỏ hơn 5000, chọn “Khám phá địa phương”. Nếu thời tiết xấu, luôn chọn “Hoãn kế hoạch”.

/**
 * 2. Decides on a travel plan based on weather, budget, and personal preferences.
 */

// Sample usage
// console.log(determineTravelPlan(true, 6000, true));   // Du lịch núi

const determineTravelPlan = (isWeatherGood, budget, likesAdventure) =>
  isWeatherGood && budget >= 5000 && likesAdventure
    ? "Du lịch núi"
    : isWeatherGood && budget >= 5000 && !likesAdventure
    ? "Du lịch biển"
    : budget < 5000
    ? "Khám phá địa phương"
    : "Hoãn kế hoạch";

// Viết hàm determineStudentCategory để xác định loại học viên dựa trên điểm thi và tỷ lệ tham gia lớp học. Điều kiện phân loại như sau:
// “Xuất sắc” nếu điểm từ 90 trở lên, và có mặt ít nhất 50% các buổi.
// “Giỏi” nếu điểm từ 75 đến 89, và có mặt ít nhất 70% các buổi.
// “Khá” nếu điểm từ 60 đến 74, và có mặt ít nhất 60% các buổi.
// “Trung bình” nếu điểm dưới 60, hoặc vắng mặt quá 40% các buổi.
// “Cần cải thiện” nếu vắng mặt quá 50% các buổi, bất kể điểm số.

/**
 * 3. Classifies students based on exam scores and class attendance percentage.
 */

// Sample usage
// console.log(determineStudentCategory(92, 0.85)); // Xuất sắc

const determineStudentCategory = (score, attendance) => {
  if (score >= 90 && attendance >= 0.5) {
    return "Xuất sắc";
  } else if (score >= 75 && attendance >= 0.7) {
    return "Giỏi";
  } else if (score >= 60 && attendance >= 0.6) {
    return "Khá";
  } else if (score < 60 || attendance < 0.6) {
    return "Trung bình";
  } else {
    return "Cần cải thiện";
  }
};

// Viết hàm hasAccessToWorkroom để kiểm tra xem một nhân viên có quyền truy cập vào phòng làm việc hay không. Điều kiện:
// Là quản lý (manager), hoặc:
// Có thẻ truy cập và đã hoàn thành bài kiểm tra an toàn.

/**
 * 4. Checks if an employee has access to the workroom.
 */

// Sample usage
// console.log(hasAccessToWorkroom(false, true, true));  // true

const hasAccessToWorkroom = (
  isManager,
  hasAccessCard,
  hasPassedSafetyTraining
) => isManager || (hasAccessCard && hasPassedSafetyTraining);
