import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm'
import { Role } from '../role.entity'
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config'

@EventSubscriber()
export class RoleSubscriber implements EntitySubscriberInterface<Role> {


}
