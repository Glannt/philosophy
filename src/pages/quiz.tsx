import { useState } from "react";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { RadioGroup } from "@heroui/radio";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";

const questions = [
  {
    question:
      "Mục tiêu cao nhất của nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì?",
    options: [
      "Tăng GDP",
      "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
      "Phát triển công nghiệp",
      "Tăng xuất khẩu",
    ],
    correct: 1,
  },
  {
    question:
      "Thành phần kinh tế nào giữ vai trò chủ đạo trong nền kinh tế Việt Nam?",
    options: [
      "Kinh tế tư nhân",
      "Kinh tế nước ngoài",
      "Kinh tế nhà nước",
      "Kinh tế tập thể",
    ],
    correct: 2,
  },
  {
    question: "Lợi ích kinh tế phản ánh điều gì?",
    options: [
      "Mục đích và động cơ của các chủ thể trong sản xuất xã hội",
      "Chỉ phản ánh lợi nhuận doanh nghiệp",
      "Chỉ phản ánh thu nhập người lao động",
      "Không phản ánh điều gì",
    ],
    correct: 0,
  },
  {
    question:
      "Đặc trưng cơ bản nhất của nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì?",
    options: [
      "Kinh tế do Nhà nước điều hành hoàn toàn",
      "Có sự quản lý của Nhà nước, định hướng XHCN, đồng thời tuân theo quy luật thị trường",
      "Tự do cạnh tranh tuyệt đối, không cần vai trò Nhà nước",
      "Chỉ dựa vào kinh tế tập thể",
    ],
    correct: 1,
  },
  {
    question:
      "Theo quan điểm triết học Mác – Lênin, cơ sở vật chất của chủ nghĩa xã hội là gì?",
    options: [
      "Nền sản xuất nhỏ lẻ, thủ công",
      "Nền sản xuất công nghiệp hiện đại, năng suất lao động cao",
      "Nền nông nghiệp truyền thống",
      "Thương mại tự do giữa các nước",
    ],
    correct: 1,
  },
  {
    question:
      "Trong nền kinh tế thị trường định hướng XHCN, Nhà nước giữ vai trò gì?",
    options: [
      "Làm trọng tài trung lập giữa các doanh nghiệp",
      "Định hướng, điều tiết và bảo đảm định hướng XHCN trong phát triển kinh tế",
      "Không can thiệp vào hoạt động của doanh nghiệp",
      "Chỉ quản lý doanh nghiệp nhà nước",
    ],
    correct: 1,
  },
  {
    question:
      "Theo triết học Mác – Lênin, mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng thể hiện điều gì trong nền kinh tế Việt Nam?",
    options: [
      "Kinh tế và chính trị vận hành tách biệt",
      "Kinh tế quyết định chính trị, đồng thời chính trị tác động trở lại kinh tế",
      "Chính trị hoàn toàn chi phối kinh tế",
      "Không có mối liên hệ nào giữa hai yếu tố này",
    ],
    correct: 1,
  },
  {
    question:
      "Trong định hướng phát triển kinh tế ở Việt Nam, yếu tố nào được xem là trung tâm của quá trình phát triển?",
    options: [
      "Phát triển doanh nghiệp nhà nước",
      "Con người – vừa là mục tiêu, vừa là động lực của sự phát triển",
      "Thu hút vốn đầu tư nước ngoài",
      "Hiện đại hóa hạ tầng giao thông",
    ],
    correct: 1,
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (selected === null) return;
    setAnswered(true);
    if (selected === questions[current].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setShowResult(false);
    setScore(0);
  };

  return (
    <DefaultLayout>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 bg-primary bg-clip-text text-transparent animate-fade-in-up">
            Kiểm tra kiến thức
          </h1>

          {/* --- Trạng thái câu hỏi --- */}
          {!showResult ? (
            <Card className="p-8 border border-primary/20 animate-scale-in shadow-md">
              {/* --- Header progress --- */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-muted-foreground">
                    Câu hỏi {current + 1}/{questions.length}
                  </span>
                  <span className="text-primary font-medium">
                    Điểm: {score}
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full">
                  <div
                    className="h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-300"
                    style={{
                      width: `${((current + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* --- Câu hỏi --- */}
              <h2 className="text-xl font-semibold mb-6 text-foreground">
                {questions[current].question}
              </h2>

              {/* --- Lựa chọn --- */}
              <RadioGroup
                value={selected?.toString()}
                onValueChange={(value) =>
                  !answered && setSelected(parseInt(value))
                }
              >
                <div className="space-y-3">
                  {questions[current].options.map((option, index) => {
                    const isCorrect =
                      answered && index === questions[current].correct;
                    const isWrong =
                      answered &&
                      selected === index &&
                      index !== questions[current].correct;

                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-300 ${
                          isCorrect
                            ? "border-green-500 bg-green-50 dark:bg-green-950"
                            : isWrong
                              ? "border-red-500 bg-red-50 dark:bg-red-950"
                              : selected === index
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input
                          checked={selected === index}
                          className="accent-primary h-4 w-4"
                          disabled={answered}
                          id={`opt-${index}`}
                          name="option"
                          type="radio"
                          onChange={() => setSelected(index)}
                        />
                        <label
                          className="flex-1 cursor-pointer select-none"
                          htmlFor={`opt-${index}`}
                        >
                          {option}
                        </label>
                        {isCorrect && (
                          <Icon
                            className="text-green-600 w-5 h-5"
                            icon="lucide:check-circle"
                          />
                        )}
                        {isWrong && (
                          <Icon
                            className="text-red-600 w-5 h-5"
                            icon="lucide:x-circle"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </RadioGroup>

              {/* --- Nút điều khiển --- */}
              <div className="flex mt-8">
                {!answered ? (
                  <Button
                    fullWidth
                    className="bg-gradient-to-r from-primary to-primary-200 text-background hover:scale-[1.03] transition-all duration-300"
                    color="primary"
                    disabled={selected === null}
                    variant="solid"
                    onPress={handleAnswer}
                  >
                    Trả lời
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    className="bg-gradient-to-r from-secondary to-secondary/70 text-background hover:scale-[1.03] transition-all duration-300"
                    color="secondary"
                    variant="solid"
                    onPress={handleNext}
                  >
                    {current < questions.length - 1
                      ? "Câu tiếp theo"
                      : "Xem kết quả"}
                  </Button>
                )}
              </div>
            </Card>
          ) : (
            /* --- Kết quả --- */
            <Card className="p-8 text-center border border-primary/20 shadow-lg animate-scale-in">
              <div
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${
                  score >= questions.length * 0.7
                    ? "bg-green-100 dark:bg-green-950"
                    : "bg-orange-100 dark:bg-orange-950"
                }`}
              >
                <span className="text-4xl font-bold text-foreground">
                  {Math.round((score / questions.length) * 100)}%
                </span>
              </div>

              <h2 className="text-3xl font-semibold text-foreground mb-2">
                Kết quả kiểm tra
              </h2>
              <p className="text-muted-foreground mb-4">
                Bạn trả lời đúng {score}/{questions.length} câu.
              </p>

              {score >= questions.length * 0.7 ? (
                <p className="text-green-600 dark:text-green-400 mb-6">
                  🎉 Xuất sắc! Bạn đã nắm vững kiến thức.
                </p>
              ) : (
                <p className="text-orange-600 dark:text-orange-400 mb-6">
                  ⚡ Hãy xem lại tài liệu và thử lại nhé!
                </p>
              )}

              <Button
                className="bg-gradient-to-r from-primary to-primary-glow text-white hover:scale-[1.05] transition-all duration-300"
                color="primary"
                variant="solid"
                onPress={handleReset}
              >
                Làm lại
              </Button>
            </Card>
          )}
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Quiz;
