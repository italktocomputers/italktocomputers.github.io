import React from 'react';
import PropTypes from 'prop-types';
import ArticleHeader from '../com/ArticleHeader';
import styles from '../scss/styles.scss';

export default function MillennialsAGenerationThatIsFightingBackAndWinning() {
    MillennialsAGenerationThatIsFightingBackAndWinning.propTypes = {
        author: PropTypes.string,
        authorImg: PropTypes.string,
        title: PropTypes.string,
        subTitle: PropTypes.string,
        date: PropTypes.date,
    };

    const props = {
        author: 'Andrew Schools',
        authorImg: 'andy-author.png',
        title: 'Millennials',
        subTitle: 'A generation that is fighting back and winning...',
        date: Date(),
    };

    return (
        <div>
            <ArticleHeader {...props} />
            <div className={styles.articleTitle}>
                <img src="images/young-women-computer-tired.png" />
            </div>

            <div className={styles.header}>Let It Rot!</div>

            <div className={styles.paragraph}>
                If you’re an American living in the United States, the news you’ve probably heard in
                regards to China has mostly focused on either their Zero Coronavirus policy, Taiwan,
                or how the Chinese government is stealing highly technological secrets from America.
                But there is something that is happening in China worth reporting on that seems to
                be also happening here too; the younger generation is no longer willing to work long
                hours for companies that don’t treat them well and for the low wages no one can live
                on.
            </div>

            <div className={styles.paragraph}>
                This phenomenon is known in China as Let It Rot. Here in America it’s the concept of
                letting the old system die by not playing any part in it. This concept is by no
                means a new concept in America or in China. But there is something different
                happening that hasn’t happened before. It’s working, and the patriarch is failing to
                stop it, and not from a lack of trying either.
            </div>

            <div className={styles.paragraph}>
                Prior to the pandemic, there were many millennials who were sick and tired of the
                existing state of affairs. Fresh out of college, finding quality jobs were far and
                few between, even though they were promised just that as long as they spent those
                exorbitant tuition fees year after year. But instead of high paying jobs after
                graduation, they were met with low wages, crazy work hours and companies that
                treated them more like cattle rather than people.
            </div>

            <div className={styles.paragraph}>
                Come the pandemic in 2020, something happened. It gave people an opportunity to see
                what their life could be like. Instead of waking up at 5 in the morning, commuting
                an hour for a job that paid them a non-living wage and treating them like crap none
                to boot, they could do their work remotely. They took these extra hours and bettered
                themselves, physical and mentally. And if they didn’t like where they worked, they
                actually had the time to interview elsewhere from the comfort of their own home.
            </div>

            <div className={styles.paragraph}>
                Fast forward a couple of years later and the younger generation isn’t willing to
                give that up so easily, even though corporate America wants to return to those good
                old days of cheap labor and jobless equals homeless blackmail. Those that can
                continue to work from home, are. Few are no longer willing to settle. This is
                clearly seen by companies complaining they can no longer find workers. But what
                these companies are not telling you is they’re simply not providing the type of work
                environment and the pay workers currently desire. Instead of offering any type of
                incentive to potential new employees, they keep staff they currently have overworked
                and in constant crisis mode so they can still make those large profits, while
                demanding cheap labor and horrible work conditions.
            </div>

            <div className={styles.header}>What the older generation can do to help</div>

            <div className={styles.paragraph}>
                A society that doesn’t take care of its future, has no future. Instead of supporting
                these companies that continue to insist on treating their employees inhumanely,
                including not providing livable wages should be boycotted. Don’t get me wrong. I am
                by no means someone who thinks every company should be boycotted, simply because you
                don’t agree with everything they do, but providing your employees with a safe work
                environment, and paying them fairly for their time they can never get back is
                inexcusable and can never be ignored. Companies like Amazon that work their workers
                to near death while worthless billionaires like Jeff Bezo and Elon Musk spend
                billions of dollars playing around with rockets isn’t something that should ever be
                normalized. However, instead of the American media questioning billionaires while
                everyone else lives paycheck to paycheck, they fill their coverage with news from
                the other side of the world, and when that doesn’t work, they deflect by pitting
                American against American. Up until now, these tactics have worked very well. Now,
                everyone is catching on and it’s no longer working.
            </div>
        </div>
    );
}
