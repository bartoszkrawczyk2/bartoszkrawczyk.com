import { ResumeEntry } from '@/data/resume';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { TimelineItem, TimelineWrapper } from '../common/Timeline';

interface ResumeProps {
  resume: ResumeEntry[];
}

export function Resume({ resume }: ResumeProps) {
  return (
    <div className="bg-white">
      <Container>
        <SectionHeader>Resume</SectionHeader>
        <TimelineWrapper>
          {resume.map((entry) => (
            <TimelineItem
              key={entry.id}
              company={entry.company}
              position={entry.position}
              from={entry.from}
              to={entry.to}
            >
              <p>{entry.description}</p>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </Container>
    </div>
  );
}
