import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="min-h-screen">
        {/* MAIN CONTENT */}
        <main>
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                {/* Hero Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full animate-bounce bg-gradient-to-r from-primary to-primary-200 mb-6 animate-float">
                  <Icon
                    className="h-10 w-10 text-primary-foreground"
                    icon="lucide:graduation-cap"
                  />
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-300 bg-clip-text text-transparent animate-fade-in-up">
                  Kinh tế thị trường định hướng xã hội chủ nghĩa
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]">
                  Tìm hiểu về nền kinh tế Việt Nam và các quan hệ lợi ích kinh
                  tế trong bối cảnh hội nhập quốc tế
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards]">
                  <Link as="button" href="/section1">
                    <Button
                      className="bg-gradient-to-r from-primary to-primary-200 hover:opacity-90 hover:scale-105 transition-all duration-300"
                      color="primary"
                      size="lg"
                    >
                      Bắt đầu học
                    </Button>
                  </Link>

                  <Link as="button" href="/quiz">
                    <Button
                      className="hover:scale-105 transition-all duration-300"
                      size="lg"
                      variant="bordered"
                    >
                      Kiểm tra kiến thức
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                Nội dung chương học
              </h2>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Section 1 */}
                <Link
                  className="animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:forwards]"
                  href="/section1"
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-primary/30 h-full group">
                    <div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow 
      flex items-center justify-center mb-4 
      group-hover:scale-110 transition-transform duration-1200 
      animate-slide-down-loop"
                    >
                      <Icon
                        className="h-6 w-6 text-primary-foreground"
                        icon="lucide:book-open"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Phần 1
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam
                    </p>
                  </Card>
                </Link>

                {/* Section 2 */}
                <Link
                  className="animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]"
                  href="/section2"
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-primary/30 h-full group">
                    <div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow 
      flex items-center justify-center mb-4 
      group-hover:scale-110 transition-transform duration-1200 
      animate-slide-down-loop"
                    >
                      <Icon
                        className="h-6 w-6 text-primary-foreground"
                        icon="lucide:file-text"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Phần 2
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hoàn thiện thể chế kinh tế thị trường định hướng xã hội
                      chủ nghĩa
                    </p>
                  </Card>
                </Link>

                {/* Section 3 */}
                {/* <Link
                  className="animate-fade-in [animation-delay:300ms] [animation-fill-mode:forwards]"
                  href="/section3"
                >
                  <Card
                    className="p-6 border-2 border-transparent rounded-lg h-full 
    transition-all duration-500 ease-out
    hover:shadow-lg hover:scale-105 hover:-translate-y-1 hover:border-primary/30 
    group animate-[fade-in_0.5s_ease-out_forwards]"
                  >
                    <div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow 
      flex items-center justify-center mb-4 
      group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon
                        className="h-6 w-6 text-primary-foreground"
                        icon="lucide:brain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Phần 3
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Các quan hệ lợi ích kinh tế ở Việt Nam
                    </p>
                  </Card>
                </Link> */}

                <Link href="/section3">
                  <Card
                    className="p-6 border-2 border-transparent rounded-lg h-full 
    transition-all duration-500 ease-out
    hover:shadow-lg hover:scale-105 hover:-translate-y-1 hover:border-primary/30 
    group"
                  >
                    {/* Icon trượt loop */}
                    <div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow 
      flex items-center justify-center mb-4 
      group-hover:scale-110 transition-transform duration-1200 
      animate-slide-down-loop"
                    >
                      <Icon
                        className="h-6 w-6 text-primary-foreground"
                        icon="lucide:brain"
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Phần 3
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Các quan hệ lợi ích kinh tế ở Việt Nam
                    </p>
                  </Card>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 animate-fade-in">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4 text-foreground animate-fade-in-up">
                    Sẵn sàng kiểm tra kiến thức của bạn?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:forwards]">
                    Hoàn thành bài kiểm tra để đánh giá mức độ hiểu biết của bạn
                    về nội dung chương học
                  </p>
                  <div className="animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]">
                    <Link as="button" href="/quiz">
                      <Button
                        className="bg-gradient-to-r from-accent to-accent/80 hover:scale-105 transition-all duration-300 font-bold text-muted-foreground"
                        color="secondary"
                        size="lg"
                      >
                        Làm bài kiểm tra ngay
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}
