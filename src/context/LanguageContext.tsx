'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface Content {
    header: {
        services: string;
        workflow: string;
        team: string;
        cta: string;
    };
    hero: {
        headline: string;
        subHeadline: string;
        cta: string;
    };
    squad: {
        title: string;
        origin: { role: string; desc: string };
        matrix: { role: string; desc: string };
        pixel: { role: string; desc: string };
        archive: { role: string; desc: string };
    };
    workflow: {
        title: string;
        subtitle: string;
        steps: {
            input: string;
            origin: string;
            matrixPixel: string;
            archive: string;
            output: string;
        };
    };
    services: {
        title: string;
        subtitle: string;
        sustainability: { title: string; desc: string };
        growth: { title: string; desc: string };
        connection: { title: string; desc: string };
    };
    trackRecord: {
        title: string;
        stats: {
            challenges: string;
            success: string;
            amount: string;
            speed: string;
        };
    };
    footer: {
        address: string;
        contact: string;
        bizInfo: string;
    };
}

const content: Record<Language, Content> = {
    ko: {
        header: {
            services: '서비스',
            workflow: '워크플로우',
            team: '팀',
            cta: '커피챗 시작하기',
        },
        hero: {
            headline: '10배 빠른 성장,\nAI 오케스트라와\n도메인 전문가의 결합',
            subHeadline: 'B:Essential은 기업의 지속가능성을 넘어\n폭발적인 성장을 설계합니다.',
            cta: '무료 커피챗 신청하기',
        },
        squad: {
            title: 'The Squad',
            origin: { role: 'Origin (기획)', desc: 'Why & Flow - 전략 수립 및 R&R 할당' },
            matrix: { role: 'Matrix (개발)', desc: 'How & Logic - 최적의 아키텍처 구현' },
            pixel: { role: 'Pixel (디자인)', desc: 'What & Experience - 사용자 경험 시각화' },
            archive: { role: 'Archive (검증)', desc: 'Reality & Audit - 도메인 지식 기반 팩트 체크' },
        },
        workflow: {
            title: 'Workflow Engine',
            subtitle: '끊김 없는 워크플로우: 아이디어에서 완벽한 결과물까지',
            steps: {
                input: 'Input (Idea)',
                origin: 'Origin',
                matrixPixel: 'Matrix & Pixel',
                archive: 'Archive',
                output: 'Output (Solution)',
            },
        },
        services: {
            title: 'Core Services',
            subtitle: '단순한 컨설팅이 아닙니다. 우리는 구축하고, 검증하고, 배포합니다.',
            sustainability: {
                title: '지속가능성 (Sustainability)',
                desc: '정부지원사업 예산 728조. 당신의 몫을 찾아드립니다. 기업의 생존 연료를 확보하세요.',
            },
            growth: {
                title: '폭발적 성장 (Explosive Growth)',
                desc: '선형적 성장이 아닌 지수적 성장. 10배 확장이 가능한 비즈니스 로직을 설계합니다.',
            },
            connection: {
                title: '연결 (Connection)',
                desc: '보이지 않는 점들을 연결합니다. 전략적 제휴를 통해 새로운 시장과 수익원을 창출합니다.',
            },
        },
        trackRecord: {
            title: '2025 Track Record',
            stats: {
                challenges: '6개 도전',
                success: '3개 성공',
                amount: '6억 수주',
                speed: '제안서 제출 1주',
            },
        },
        footer: {
            address: '경기도 남양주시 와부읍 수레로116번길 16, 4층 402호',
            contact: '문의',
            bizInfo: '대표: 구우영 | 사업자등록번호: 741-40-00000',
        },
    },
    en: {
        header: {
            services: 'Services',
            workflow: 'Workflow',
            team: 'Team',
            cta: 'Start Coffee Chat',
        },
        hero: {
            headline: 'We Solve Your\nOne Problem.\n10x Faster.',
            subHeadline: 'AI Orchestra + Domain Experts.\nFrom Government Funding to Business Model Innovation.',
            cta: 'Start Coffee Chat',
        },
        squad: {
            title: 'The Squad',
            origin: { role: 'Origin (Strategy)', desc: 'Why & Flow - Strategy & R&R Allocation' },
            matrix: { role: 'Matrix (Dev)', desc: 'How & Logic - Optimal Architecture' },
            pixel: { role: 'Pixel (Design)', desc: 'What & Experience - UX Visualization' },
            archive: { role: 'Archive (Audit)', desc: 'Reality & Audit - Domain Fact Check' },
        },
        workflow: {
            title: 'Workflow Engine',
            subtitle: 'Seamless Workflow: From Idea to Perfect Solution',
            steps: {
                input: 'Input (Idea)',
                origin: 'Origin',
                matrixPixel: 'Matrix & Pixel',
                archive: 'Archive',
                output: 'Output (Solution)',
            },
        },
        services: {
            title: 'Core Services',
            subtitle: 'We don\'t just consult. We build, verify, and deploy.',
            sustainability: {
                title: 'Sustainability',
                desc: 'Government Funding Support. We secure the fuel for your engine.',
            },
            growth: {
                title: 'Explosive Growth',
                desc: 'Scaling Logic. From linear to exponential growth.',
            },
            connection: {
                title: 'Connection',
                desc: 'Business Model Innovation. Connecting dots others don\'t see.',
            },
        },
        trackRecord: {
            title: '2025 Track Record',
            stats: {
                challenges: '6 Challenges',
                success: '3 Successes',
                amount: '600M KRW',
                speed: '1 Week Proposal',
            },
        },
        footer: {
            address: '402, 16, Surero 116beon-gil, Wabu-eup, Namyangju-si, Gyeonggi-do',
            contact: 'Contact',
            bizInfo: 'CEO: Koo Woo-young | Biz Reg: 741-40-00000',
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ko');

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: content[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
