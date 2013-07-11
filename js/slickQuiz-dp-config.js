// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>How much do you know about personal finance? Try your hand at this basic financial literacy quiz.</p>",
        "results": "<h5>Follow all of the retirement savings coverage on the <a href='http://blogs.denverpost.com/personalinterest/tag/retirement/' target='_blank'>Personal Interest blog</a>.</h5><br><p>You have to help yourself.</p><p>It’s true with anything. Want to lose a couple of pounds? You’ll have to do something about it. Got a pile of junk on your desk? Start going through it. It’s only when the pile reaches about eye level that it seems like it might actually be impossible to ever get through it. But the first step is always the same: Pick up the top thing and look at it.</p><p>Your retirement savings situation is no different, and there’s a heap of evidence that says so. Earlier this year, for example, the Employee Benefit Research Institute released research indicating that <a href='http://www.ebri.org/pdf/PR1014.29Mar13.SvgTgts2.pdf' target='_blank'>the simple act of using an online calculator</a> decreased the likelihood of people in the lowest 25 percent of incomes running short of money in retirement by between 14 and 18 percentage points. </p><p>On its face, it’s simple: Calculate what you’ll need, and then... you’ll know what you need. </p><p>With that in mind, we offer you this lighthearted financial literacy quiz along with the resources to pick up learning about saving for retirement wherever you left off —  even if you left off napping through a 401k informational meeting at the office. (We find this stuff strangely relaxing, too!)</p>",
        /* "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here */
    },
   
    "questions": [
        { // Question 1
            "q": "Suppose you have $100 in a savings account earning 2 percent interest per year. Meanwhile, I have $110 dollars stashed in a Troy Tulowitzki bobblehead doll. After five years, which of the following is true?",
            "a": [
                {"option": "There’s more money in Tulo’s head than in your savings.",      "correct": false},
                {"option": "You have more money in your savings account than I do in the bobblehead.",     "correct": true},
                {"option": "We have the same amount of money.",      "correct": false}// no comma here
            ],

            "correct": "<p><span>Correct!</span>Your savings account will have more money than will my bobblehead doll, thanks to compound interest. After the first year, your $100 will earn $2 in interest, making the total $102. After the second year, your $102 will earn $2.04, for a total of $104.04. In the third year, your $104.04 will earn $2.08, totaling $106.12. That’ll earn $2.12, bringing it to $108.24 in the fourth year. In the fifth year, it’ll earn $2.16, making your total $110.40, for a whole 40 cents more than then $110 I’ve got stashed.</p>",
            "incorrect": "<p><span>Incorrect.</span>Your savings account will have more money than will my bobblehead doll, thanks to compound interest. After the first year, your $100 will earn $2 in interest, making the total $102. After the second year, your $102 will earn $2.04, for a total of $104.04. In the third year, your $104.04 will earn $2.08, totaling $106.12. That’ll earn $2.12, bringing it to $108.24 in the fourth year. In the fifth year, it’ll earn $2.16, making your total $110.40, for a whole 40 cents more than then $110 I’ve got stashed.</p>" // no comma here
        },

        { // Question 2
            "q": "Imagine that the interest rate on your savings account is 1 percent a year and inflation is 1.7 percent a year. After one year, would the money in the account buy more than it does today, exactly the same or less than today?",
            "a": [
                {"option": "More.",    "correct": false},
                {"option": "Same.",     "correct": false},
                {"option": "Less.",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Your money, earning just 1 percent interest while inflation is at 1.7 percent per year, would buy a little less next year than it will this year.</p>",
            "incorrect": "<p><span>Incorrect.</span>Your money, earning just 1 percent interest while inflation is at 1.7 percent per year, would buy a little less next year than it will this year.</p>" // no comma here
        },
        
        { // Question 3
            "q": "Contributing money to both a Roth IRA and a 401(k) is which of the following?",
            "a": [
                {"option": "Tax diversification.",    "correct": true},
                {"option": "Redundant.",     "correct": false},
                {"option": " A &ldquo;Tampa Two.&rdquo;",      "correct": false},
                {"option": " &ldquo;Two Broke Girls.&rdquo;",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Contributing to both a Roth IRA and a 401(k) plan is an example of tax diversification.</p><p>Mira Finé, a Denver-based certified personal accountant and national director of tax services at Hein and Associates, says to think of tax diversification as &ldquo;diversification of the type of tax, on the bracket and on your investment flow.&rdquo;</p><p>When you contribute money to a Roth IRA, you don’t have to pay taxes on the earnings —  which is to say, you pay taxes on the money now, but not later. When you contribute to a 401(k), it’s usually pre-tax money, meaning you don’t pay taxes now, but you do later.</p><p>If you’re doing both, you’re hedging against the uncertain world of tax policy. Maybe policy in the future will be advantageous to you. Maybe it won’t. Since you can’t know, it makes sense to take some of the hit now and some later.",
            "incorrect": "<p><span>Incorrect.</span>Contributing to both a Roth IRA and a 401(k) plan is an example of tax diversification.</p><p>Mira Finé, a Denver-based certified personal accountant and national director of tax services at Hein and Associates, says to think of tax diversification as &ldquo;diversification of the type of tax, on the bracket and on your investment flow.&rdquo;</p><p>When you contribute money to a Roth IRA, you don’t have to pay taxes on the earnings &mdash; which is to say, you pay taxes on the money now, but not later. When you contribute to a 401(k), it’s usually pre-tax money, meaning you don’t pay taxes now, but you do later.</p><p>If you’re doing both, you’re hedging against the uncertain world of tax policy. Maybe policy in the future will be advantageous to you. Maybe it won’t. Since you can’t know, it makes sense to take some of the hit now and some later." // no comma here
        },        

        { // Question 4
            "q": "Like many Americans, my home will be my largest single investment and its value and associated costs can ultimately play a large role in how much I am able to save for retirement. I am considering a 15-year mortgage and a 30-year mortgage. Typically:",
            "a": [
                {"option": "The 15-year mortgage will have higher monthly payments and the total interest over the life of the loan will be less.",    "correct": true},
                {"option": "The 30-year mortgage will have higher monthly payments and the total interest over the life of the loan will be less.", "correct": false},
                {"option": "The two mortgages will have the same monthly payments but different amounts of interest over the life of the loan.",     "correct": false}, 
                {"option": "The two mortgages will have different monthly payments but the same amount of interest over the life of the loan. ", "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Higher payments, less total interest. According to Squared Away, &ldquo;eight in 10 Americans choose a 30-year fixed-rate mortgage.&rdquo; But that’s not necessarily because it’s the best choice for most people. They’ve got an <a href='http://squaredaway.bc.edu' target='_blank'>online mortgage calculator</a> to help you figure out if what has become the default mortgage is really the best one for you.</p>",
            "incorrect": "<p><span>Incorrect.</span>Higher payments, less total interest. According to Squared Away, &ldquo;eight in 10 Americans choose a 30-year fixed-rate mortgage.&rdquo; But that’s not necessarily because it’s the best choice for most people. They’ve got an <a href='http://squaredaway.bc.edu' target='_blank'>online mortgage calculator</a> to help you figure out if what has become the default mortgage is really the best one for you.</p>" // no comma here
        },
        { // Question 5
            "q": "True or false: Buying a single company’s stock usually provides a safer return than a stock mutual fund.",
            "a": [
                {"option": "True.",    "correct": false},
                {"option": "False.",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> It’s all about diversification. &ldquo;If you’re a person that picks stocks,&rdquo; says Finé, &ldquo;there would have been maybe one day in the last 40 years that would have been the perfect day.&rdquo;</p><p>&ldquo;You can’t ever time what you’re going to do,&rdquo; she says, adding that people kick themselves saying things like, &ldquo;If I had bought Google!&rdquo;</p><p>&ldquo;Well,&rdquo; she says, &ldquo;you could have bought it two days before it dropped  100 points and it would have taken forever to recover those 100 points.&rdquo;</p><p>Buying stock mutual funds composed of many diverse types of stocks, you’re somewhat more insulated from the unpredictable ups and downs of individual companies — or, for a more specific example, financial catastrophe sparked by unforseeable white-collar crime at the company where you’ve invested all of your money.</p>",
            "incorrect": "<p><span>Incorrect, False:</span>It’s all about diversification. &ldquo;If you’re a person that picks stocks,&rdquo; says Finé, &ldquo;there would have been maybe one day in the last 40 years that would have been the perfect day.&rdquo;</p><p>&ldquo;You can’t ever time what you’re going to do,&rdquo; she says, adding that people kick themselves saying things like, &ldquo;If I had bought Google!&rdquo;</p><p>&ldquo;Well,&rdquo; she says, &ldquo;you could have bought it two days before it dropped  100 points and it would have taken forever to recover those 100 points.&rdquo;</p><p>Buying stock mutual funds composed of many diverse types of stocks, you’re somewhat more insulated from the unpredictable ups and downs of individual companies — or, for a more specific example, financial catastrophe sparked by unforseeable white-collar crime at the company where you’ve invested all of your money.</p>" // no comma here
        },
        { // Question 6
            "q": "True or false: Annuities always provide a guaranteed rate of return.",
            "a": [
                {"option": "True.",    "correct": false},
                {"option": "False.",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>&ldquo;It’s driven by the market,&rdquo; Finé says. In other words, it’s generally at risk, just like anything else is. Even if something offers a &ldquo;guaranteed return,&rdquo; it’s wise to regard it with suspicion. If it’s paying out 6 percent but the principal isn’t appreciating at at least 6 percent, there’s cause for concern.</p><p>&ldquo;There are often times that that is actually coming out of the principal,&rdquo; Finé says. &ldquo;It’s not necessarily a guaranteed income return. It’s, for lack of a better term, a distribution.&rdquo;</p>",
            "incorrect": "<p><span>Incorrect, False:</span>&ldquo;It’s driven by the market,&rdquo; Finé says. In other words, it’s generally at risk, just like anything else is. Even if something offers a &ldquo;guaranteed return,&rdquo; it’s wise to regard it with suspicion. If it’s paying out 6 percent but the principal isn’t appreciating at at least 6 percent, there’s cause for concern.</p><p>&ldquo;There are often times that that is actually coming out of the principal,&rdquo; Finé says. &ldquo;It’s not necessarily a guaranteed income return. It’s, for lack of a better term, a distribution.&rdquo;</p>" // no comma here
        },
        { // Question 7
            "q": "How quickly are you vested in your employer's retirement plan matching offerings (or stock options)?",
            "a": [
                {"option": "One hundred percent vested after one year, per federal law.",   "correct": false},
                {"option": "One hundred percent vested after three years, per federal law.",          "correct": false},
                {"option": "Thirty-three percent at the end of each year until you're 100 percent vested after four years.",  "correct": false},
                {"option": "Twenty-five percent at the end of each year until you're 100 percent vested after four years.",  "correct": false} // no comma here
            ],
            "correct": "<p><span>This was a trick question.</span>(Sorry, but in a quiz about finances, it just seemed like there should be at least one.) If your employer uses a vesting schedule, it's up to them to choose what type of schedule to use -- so you'll need to ask your HR department. They might use immediate vesting, cliff vesting or graded vesting. Immediate vesting is what it sounds like; you own the matching funds (or whatever benefit you're looking at) immediately. Cliff vesting means that, after some period of time, you go from owning zero percent of the benefit to all of the benefit. Graded vesting means that you gradually own more and more of the benefit until you reach 100 percent. </p>",
            "incorrect": "<p><span>This was a trick question.</span>(Sorry, but in a quiz about finances, it just seemed like there should be at least one.) If your employer uses a vesting schedule, it's up to them to choose what type of schedule to use -- so you'll need to ask your HR department. They might use immediate vesting, cliff vesting or graded vesting. Immediate vesting is what it sounds like; you own the matching funds (or whatever benefit you're looking at) immediately. Cliff vesting means that, after some period of time, you go from owning zero percent of the benefit to all of the benefit. Graded vesting means that you gradually own more and more of the benefit until you reach 100 percent. </p>" // no comma here
        } // no comma here
    ]
};