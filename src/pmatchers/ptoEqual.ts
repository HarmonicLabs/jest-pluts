import { Machine, Term } from '@harmoniclabs/plu-ts';
import type { ExpectationResult, MatcherContext } from 'expect';

export function ptoEqual( this: MatcherContext, actual: unknown, expected: unknown ): ExpectationResult
{
    if(!(
        actual instanceof Term &&
        expected instanceof Term
    ))
    {
        throw new Error(
            "ptoEqual expects `Term` instances"
        );
    }

    const actualResult = Machine.evalSimple( actual ); 
    const expectedResult = Machine.evalSimple( expected ); 

    const pass = this.equals(
        actualResult,
        expectedResult
    );

    if( pass )
    {
        return {
            pass: true,
            message: () => ""
        }
    }
    else
    {
        return {
            pass: false,
            message: () => 
                `passed expression evaluated to ${this.utils.printReceived(
                    actualResult
                )} but the expected result was ${this.utils.printExpected(
                    expectedResult
                )}`
        }
    }
};

export const ptoBe = ptoEqual;