import { ResumeEntry } from '@/data/resume';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { TimelineItem, TimelineWrapper } from '../common/Timeline';

interface ResumeProps {
  resume: ResumeEntry[];
}

export function Resume({ resume }: ResumeProps) {
  return (
    <div className="bg-white" id="resume">
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
  );
}
