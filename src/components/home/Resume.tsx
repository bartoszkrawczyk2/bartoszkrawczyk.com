import { ResumeEntry } from '@/data/resume';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { TimelineItem, TimelineWrapper } from '../common/Timeline';

interface ResumeProps {
  resume: ResumeEntry[];
}

export function Resume({ resume }: ResumeProps) {
  return (
    <section id="resume" className="pt-12">
      <div className="bg-white">
        <Container>
          <SectionHeader>Resume</SectionHeader>
          <TimelineWrapper>
            {resume.map((entry) => (
              <TimelineItem key={entry.id} resume={entry}>
                <p>{entry.description}</p>
              </TimelineItem>
            ))}
          </TimelineWrapper>
        </Container>
      </div>
    </section>
  );
}
