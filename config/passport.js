import {Strategy, ExtractJWT} from 'passport-jwt';
import User from '../models/user.model';

const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.KEY;
const usePassport = () => {
    passport.use(
        new Strategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    return done(null, user)
                }
                return done(null, false)
            })
            .catch(err => {
                console.log(err);
            });
        })
    )
}

module.exports = usePassport;